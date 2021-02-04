'use strict';

const cypress = require('cypress');
const lodash = require('lodash');
const chalk = require('chalk');

// RESTRICTED PARAMS
const restricted = {
  noExit: false,
  reporter: 'junit',
  reporterOptions: {
    toConsole: false
  },
  config: {
    watchForFileChanges: false
  }
};

// DEFAULTS PARAMS
const defaults = {
  browser: 'chrome',
  headless: true,
  noExit: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: false,
    toConsole: false
  },
  quiet: true,
  configFile: false,
  config: {
    video: false,
    watchForFileChanges: false
  }
};

const Executor = require('@runnerty/module-core').Executor;

class cypressExportExecutor extends Executor {
  constructor(process) {
    super(process);
    this.endOptions = { end: 'end', msg_output: '' };
  }

  async exec(opt) {
    const options = lodash.defaultsDeep(
      lodash.cloneDeep(restricted),
      lodash.cloneDeep(opt),
      lodash.cloneDeep(defaults)
    );
    try {
      const results = await cypress.run(options);

      if (results.failures) {
        this.endOptions.end = 'error';
        this.endOptions.msg_output = results.message;
        this.endOptions.messageLog = results.message;
        this.endOptions.err_output = results.message;
        this.endOptions.data_output = results.failures;
        this.endOptions.extra_output = results.failures;
      } else {
        if (results.totalFailed && results.totalFailed > 0) {
          this.endOptions.end = 'error';
        }

        // MESSAGE FORMAT
        let resultsMsgFormatted = '';
        for (const run of results.runs) {
          for (const test of run.tests) {
            let titles = '';
            for (const title of test.title) {
              titles += (titles == '' ? '' : ' - ') + title;
            }
            switch (test.state) {
              case 'failed':
                resultsMsgFormatted += chalk.red(
                  `${titles}: ${test.state} (${test.displayError.replace(/\n/g, ' ')})\n`
                );
                break;
              case 'passed':
                resultsMsgFormatted += chalk.green(`${titles}: ${test.state}\n`);
                break;
              default:
                resultsMsgFormatted += `${titles}: ${test.state}\n`;
                break;
            }
          }
        }
        // TOTALS
        resultsMsgFormatted += `Total Duration: ${results.totalDuration}\n`;
        resultsMsgFormatted += `Total Suites: ${results.totalSuites}\n`;
        resultsMsgFormatted += `Total Tests: ${results.totalTests}\n`;
        resultsMsgFormatted += `Total Failed: ${results.totalFailed}\n`;
        resultsMsgFormatted += `Total Passed: ${results.totalPassed}\n`;
        resultsMsgFormatted += `Total Pending: ${results.totalPending}\n`;
        resultsMsgFormatted += `Total Skipped: ${results.totalSkipped}\n`;

        this.endOptions.msg_output = resultsMsgFormatted;
        this.endOptions.messageLog = resultsMsgFormatted;
        this.endOptions.err_output = resultsMsgFormatted;
        this.endOptions.extra_output = results;
        this.endOptions.data_output = results;
      }
    } catch (err) {
      this.endOptions.end = 'error';
      this.endOptions.msg_output = err;
      this.endOptions.messageLog = err;
      this.endOptions.err_output = err;
    }
    this.end(this.endOptions);
  }
}
module.exports = cypressExportExecutor;
