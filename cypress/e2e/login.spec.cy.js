import userData from '../fixtures/user-data.json';

describe('Exercise-1', () => {
  const selectorsList = {
    signInUsername: "[data-test='signin-username']",
    signInPassword: "[data-test='signin-password']",
    signInSubmit: "[data-test='signin-submit']",
    sideNavUsername: "[data-test='sidenav-username']",
    sideNavSignOut: "[data-test='sidenav-signout']",
    signInError: "[data-test='signin-error']",
  };

  it('CT-01	Login com Username e Password válidos', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get(selectorsList.signInUsername).type(userData.userSuccess.username);
    cy.get(selectorsList.signInPassword).type(userData.userSuccess.password);
    cy.get(selectorsList.signInSubmit).click();
    cy.get(selectorsList.sideNavUsername).should('be.visible');
    cy.get(selectorsList.sideNavSignOut).should('be.visible');
  });

  it('CT-02	Login com Username inválido', () => {
    cy.visit('http://localhost:3000/signin');
    cy.intercept('POST', '**/login').as('login');
    cy.get(selectorsList.signInUsername).type(userData.userFail.username);
    cy.get(selectorsList.signInPassword).type(userData.userFail.password);
    cy.get(selectorsList.signInSubmit).click();
    cy.wait('@login').its('response.statusCode').should('eq', 401);
    cy.get(selectorsList.signInError);
  });
});
