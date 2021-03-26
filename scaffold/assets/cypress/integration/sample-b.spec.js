/// <reference types="Cypress" />

describe('Runnerty IO Home Test B', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Load Test [B]', () => {
    cy.get('h1').contains('Log in');
  });
});
