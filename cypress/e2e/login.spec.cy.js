describe('Exercise-1', () => {
  it('CT-01	Login com Username e Password válidos', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get("[data-test='signin-username']").type('Heath93');
    cy.get("[data-test='signin-password']").type('s3cret');
    cy.get("[data-test='signin-submit']").click();
    cy.get("[data-test='sidenav-username']").should('be.visible');
    cy.get("[data-test='sidenav-signout']").should('be.visible');
  });

  it('CT-02	Login com Username inválido', () => {
    cy.visit('http://localhost:3000/signin');
    cy.intercept('POST', '**/login').as('login');
    cy.get("[data-test='signin-username']").type('test2026');
    cy.get("[data-test='signin-password']").type('s3cret');
    cy.get("[data-test='signin-submit']").click();
    cy.wait('@login').its('response.statusCode').should('eq', 401);
    cy.get("[data-test='signin-error']");
  });
});
