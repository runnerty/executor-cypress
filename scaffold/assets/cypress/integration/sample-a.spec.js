describe('Runnerty IO Home Test', () => {
  it('Load Test [A-1]', () => {
    cy.visit('/');
  });

  it('Load Test (Fail forced) [A-2]', () => {
    expect(true).to.equal(false);
  });
});
