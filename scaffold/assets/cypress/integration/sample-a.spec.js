/// <reference types="Cypress" />

describe('Runnerty IO Home Test A', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should have a h1 with the text "Log in" [A-1]', () => {
    cy.get('h1').contains('Log in');
  });

  it('Should fail (Fail forced) [A-2]', () => {
    cy.get('#mat-input-0').type(Cypress.env('username'));
    cy.get('#mat-input-1').type(Cypress.env('password'));
    expect(true).to.equal(false);
  });
});
