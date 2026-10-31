describe('Exercise-1', () => {
  it('CT-01	Login com Username e Password válidos', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get("[data-test='signin-username']").type('Heath93');
    cy.get("[data-test='signin-password']").type('s3cret');
    cy.get("[data-test='signin-submit']").click();
    cy.get("[data-test='sidenav-username']").should('be.visible');
    cy.get("[data-test='sidenav-signout']").should('be.visible');
  });
});
