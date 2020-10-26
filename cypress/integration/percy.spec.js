describe('Visual Regression Testing with Percy and Cypress', () => {
  it('Should take Percy snapshot', () => {
    cy.visit('http://www.example.com');

    cy.wait(1000);

    cy.percySnapshot();
  });
});
