<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
<a href="#badge">
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Cypress executor for [Runnerty]:

Cypress wrapper.

### Installation:

Through NPM

```bash
npm i @runnerty/executor-cypress
```

You can also add modules to your project with [runnerty]

```bash
npx runnerty add @runnerty/executor-cypress
```

This command installs the module in your project, adds example configuration in your [config.json] and creates an example plan of use.

If you have installed [runnerty] globally you can include the module with this command:

```bash
runnerty add @runnerty/executor-cypress
```

**Please check Cypress [system requirements](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)**.

### Configuration sample:

Add in [config.json]:

```json
{
  "id": "cypress_default",
  "type": "@runnerty-executor-cypress"
}
```

### Plan sample:

Add in [plan.json]:

```json
{
  "id": "cypress_default",
  "exec": {
    "id": "cypress_default",
    "browser": "chrome",
    "configFile": false,
    "config": {
      "integrationFolder": "./tests"
    }
  }
}
```

### Plan advanced:

Add in [plan.json]:

```json
{
  "id": "cypress_default",
  "browser": "chrome",
  "group": "MY_GROUP",
  "tag": "production",
  "key": "MY_SECRET_KEY",
  "port": "8080",
  "headed": false,
  "headless": true,
  "quiet": true,
  "record": false,
  "reporter": "junit",
  "reporterOptions": {
    "mochaFile": false,
    "toConsole": false
  },
  "spec": ".tests/my_test.spec.js",
  "config": {
    "baseUrl": "https://runnerty.io",
    "env": {
      "MY_ENV_1": "@GV(MY_VAL_TO_ENV_1)"
    },
    "chromeWebSecurity": true,
    "numTestsKeptInMemory": 50,
    "defaultCommandTimeout": 4000,
    "execTimeout": 60000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 5000,
    "responseTimeout": 30000,
    "taskTimeout": 60000,
    "fileServerFolder": "./",
    "fixturesFolder": "cypress/fixtures",
    "integrationFolder": "cypress/integration",
    "downloadsFolder": "cypress/downloads",
    "pluginsFile": "cypress/plugins/index.js",
    "screenshotsFolder": "cypress/screenshots",
    "videosFolder": "cypress/videos",
    "ignoreTestFiles": "**/ignoredTestFiles/*.js",
    "screenshotOnRunFailure": false,
    "nodeVersion": "bundled",
    "supportFile": false,
    "trashAssetsBeforeRuns": true,
    "videoCompression": 32,
    "video": false,
    "videoUploadOnPasses": true,
    "viewportHeight": 660,
    "viewportWidth": 1000,
    "animationDistanceThreshold": 5,
    "waitForAnimations": true,
    "scrollBehavior": "top",
    "firefoxGcInterval": { "runMode": 1, "openMode": null },
    "experimentalRunEvents": false,
    "experimentalSourceRewriting": false,
    "experimentalStudio": false,
    "retries": { "runMode": 0, "openMode": 0 },
    "includeShadowDom": false
  }
}
```

#### Params:

| Parameter       | Description                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------- |
| browser         | Specify different browser to run tests in, either by name or by filesystem path. default: chrome. |
| ciBuildId       | Specify a unique identifier for a run to enable grouping or parallelization                       |
| group           | Group recorded tests together under a single run name                                             |
| tag             | Tag string for the recorded run, like 'production,nightly'                                        |
| headed          | Display the browser instead of running headlessly                                                 |
| headless        | Hide the browser instead of running headed. default: true.                                        |
| key             | Specify your secret record key                                                                    |
| parallel        | Run recorded specs in parallel across multiple machines                                           |
| port            | Override default port                                                                             |
| quiet           | Run quietly, using only the configured reporter. default: true.                                   |
| record          | Whether to record the test run                                                                    |
| reporterOptions | Specify mocha reporter options.                                                                   |
| spec            | Specify the specs to run                                                                          |
| configFile      | Path to the config file to be used. If false is passed, no config file will be used.              |

#### Config param options:

| Parameter                   | Description                                                                                                                                                                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| baseUrl                     | Url used as prefix for [cy.visit()](https://on.cypress.io/visit) or [cy.request()](https://on.cypress.io/request) command’s url                                                                                                                                   |
| env                         | Any values to be set as [environment variables](https://docs.cypress.io/guides/guides/environment-variables.html)                                                                                                                                                 |
| ignoreTestFiles             | A String or Array of glob patterns used to ignore test files that would otherwise be shown in your list of tests. Cypress uses minimatch with the options: {dot: true, matchBase: true}. We suggest using http://globtester.com to test what files would match.   |
| numTestsKeptInMemory        | The number of tests for which snapshots and command data are kept in memory. Reduce this number if you are experiencing high memory consumption in your browser during a test run.                                                                                |
| reporterOptions             | Some reporters accept [reporterOptions](https://on.cypress.io/reporters) that customize their behavior                                                                                                                                                            |
| port                        | Port used to host Cypress. Normally this is a randomly generated port                                                                                                                                                                                             |
| reporter                    | The [reporter](https://docs.cypress.io/guides/guides/reporters.html) used when running headlessly or in CI                                                                                                                                                        |
| defaultCommandTimeout       | Time, in milliseconds, to wait until most DOM based commands are considered timed out                                                                                                                                                                             |
| execTimeout                 | Time, in milliseconds, to wait for a system command to finish executing during a [cy.exec()](https://on.cypress.io/exec) command                                                                                                                                  |
| pageLoadTimeout             | Time, in milliseconds, to wait for page transition events or [cy.visit()](https://on.cypress.io/visit), [cy.go()](https://on.cypress.io/go), [cy.reload()](https://on.cypress.io/reload) commands to fire their page load events                                  |
| requestTimeout              | Time, in milliseconds, to wait for an XHR request to go out in a [cy.wait()](https://on.cypress.io/wait) command                                                                                                                                                  |
| responseTimeout             | Time, in milliseconds, to wait until a response in a [cy.request()](https://on.cypress.io/request)                                                                                                                                                                |
| taskTimeout                 | Time, in milliseconds, to wait for a task to finish executing during a cy.task() command                                                                                                                                                                          |
| fileServerFolder            | Path to folder where application files will attempt to be served from                                                                                                                                                                                             |
| fixturesFolder              | Path to folder containing fixture files (Pass false to disable). default: 'cypress/fixtures'                                                                                                                                                                      |
| integrationFolder           | Path to folder containing integration test files. default: 'cypress/integration'                                                                                                                                                                                  |
| downloadsFolder             | Path to folder where files downloaded during a test are saved. default: 'cypress/downloads'                                                                                                                                                                       |
| nodeVersion                 | If set to `system`, Cypress will try to find a `node` executable on your path to use when executing your plugins. Otherwise, Cypress will use the Node version bundled with Cypress. default: 'bundled'                                                           |
| pluginsFile                 | Path to plugins file. (Pass false to disable). default: 'cypress/plugins/index.js'                                                                                                                                                                                |
| resolvedNodePath            | If `nodeVersion === 'system'` and a `node` executable is found, this will be the full filesystem path to that executable.                                                                                                                                         |
| resolvedNodeVersion         | The version of `node` that is being used to execute plugins. example 1.2.3                                                                                                                                                                                        |
| screenshotOnRunFailure      | Whether Cypress will take a screenshot when a test fails during cypress run.                                                                                                                                                                                      |
| screenshotsFolder           | Path to folder where screenshots will be saved from [cy.screenshot()](https://on.cypress.io/screenshot) command or after a headless or CI run’s test failure. default: 'cypress/screenshots'                                                                      |
| supportFile                 | Path to file to load before test files load. This file is compiled and bundled. (Pass false to disable). default: 'cypress/support/index.js'                                                                                                                      |
| videosFolder                | Path to folder where videos will be saved after a headless or CI run. default: 'cypress/videos'                                                                                                                                                                   |
| trashAssetsBeforeRuns       | Whether Cypress will trash assets within the screenshotsFolder and videosFolder before headless test runs. default: true.                                                                                                                                         |
| videoCompression            | The quality setting for the video compression, in Constant Rate Factor (CRF). The value can be false to disable compression or a value between 0 and 51, where a lower value results in better quality (at the expense of a higher file size). default: 32        |
| video                       | Whether Cypress will record a video of the test run when running headlessly. default: false.                                                                                                                                                                      |
| videoUploadOnPasses         | Whether Cypress will upload the video to the Dashboard even if all tests are passing. This applies only when recording your runs to the Dashboard. Turn this off if you’d like the video uploaded only when there are failing tests. default: true.               |
| chromeWebSecurity           | Whether Chrome Web Security for same-origin policy and insecure mixed content is enabled. Read more about this here. default: true.                                                                                                                               |
| viewportHeight              | Default height in pixels for the application under tests’ viewport (Override with [cy.viewport()](https://on.cypress.io/viewport) command). default: 660.                                                                                                         |
| viewportWidth               | Default width in pixels for the application under tests’ viewport. (Override with [cy.viewport()](https://on.cypress.io/viewport) command). default: 1000.                                                                                                        |
| animationDistanceThreshold  | The distance in pixels an element must exceed over time to be considered animating. default: 5.                                                                                                                                                                   |
| waitForAnimations           | Whether to wait for elements to finish animating before executing commands. default: true.                                                                                                                                                                        |
| scrollBehavior              | Viewport position to which an element should be scrolled prior to action commands. Setting `false` disables scrolling. default: 'top'                                                                                                                             |
| firefoxGcInterval           | Firefox version 79 and below only: The number of tests that will run between forced garbage collections. default: { runMode: 1, openMode: null }                                                                                                                  |
| experimentalRunEvents       | Allows listening to the `before:run`, `after:run`, `before:spec`, and `after:spec` events in the plugins file. default: false.                                                                                                                                    |
| experimentalSourceRewriting | Enables AST-based JS/HTML rewriting. This may fix issues caused by the existing regex-based JS/HTML replacement algorithm. default: false.                                                                                                                        |
| experimentalStudio          | Generate and save commands directly to your test suite by interacting with your app as an end user would.. default: false.                                                                                                                                        |
| retries                     | Number of times to retry a failed test. If a number is set, tests will retry in both runMode and openMode. To enable test retries only in runMode, set e.g. { openMode: null, runMode: 2 }. default: null                                                         |
| includeShadowDom            | Enables including elements within the shadow DOM when using querying. commands (e.g. cy.get(), cy.find()). Can be set globally in cypress.json per-suite or per-test in the test configuration object, or programmatically with Cypress.config(), default: false. |

### These parameters will always have the fixed values to avoid conflicts:

| Parameter                 | Description                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------- |
| noExit                    | Keep Cypress open after all tests run. Fixed value: false                             |
| reporter                  | Specify a mocha reporter. Fixed value: 'junit'                                        |
| watchForFileChanges       | Whether Cypress will watch and restart tests on test file changes: Fixed value: false |
| reporterOptions/toConsole | Specify mocha reporter options: toConsole. Fixed value: false                         |

### Output (Process values):

#### Standard

- `PROCESS_EXEC_MSG_OUTPUT`: Cypress summary message.
- `PROCESS_EXEC_ERR_OUTPUT`: Error output message.

#### Results output

- `PROCESS_EXEC_DATA_OUTPUT`: Cypress Json stringify output.

It is also possible to access the rest of the [values returned by Cypress](https://docs.cypress.io/guides/guides/module-api.html#Results). Some examples:

- `PROCESS_EXEC_TOTALDURATION`: Total time duration
- `PROCESS_EXEC_TOTALPASSED`: Total number of passed
- `PROCESS_EXEC_TOTALPENDING`: Total number of pending
- `PROCESS_EXEC_TOTALFAILED`: Total number of failures
- `PROCESS_EXEC_TOTALSKIPPED`: Total number of skipped
- `PROCESS_EXEC_TOTALSKIPPED`: Total number of skipped
- `PROCESS_EXEC_TOTALSKIPPED`: Total number of skipped
- `PROCESS_EXEC_TOTALSUITES`: Total number of suites
- `PROCESS_EXEC_TOTALTESTS`: Total number of tests
- `PROCESS_EXEC_CYPRESSVERSION`: Cypress Version
- `PROCESS_EXEC_BROWSERNAME`: Browser name
- `PROCESS_EXEC_REPORTER`: Reporter
- `PROCESS_EXEC_RUNURL`: Run URL
- `PROCESS_EXEC_RUNS_0_STATE`: State of test number 1
- `PROCESS_EXEC_RUNS_0_STATE`: State of test number 1
- `PROCESS_EXEC_RUNS_0_DISPLAYERROR`: Display error of test number 1
- `PROCESS_EXEC_RUNS_0_SCREENSHOTS_0`: ScreenShot path 1 of test number 1
- `PROCESS_EXEC_RUNS_0_VIDEO`: Video of test number 1

[runnerty]: https://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/executor-cypress.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/executor-cypress
[npm-image]: https://img.shields.io/npm/v/@runnerty/executor-cypress.svg
[david-badge]: https://david-dm.org/runnerty/executor-cypress.svg
[david-badge-url]: https://david-dm.org/runnerty/executor-cypress
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/
[ejs]: https://ejs.co
