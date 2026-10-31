import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

describe('Exercise-1', () => {
  it('CT-01	Login com Username e Password válidos', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    loginPage.verifyLoginSucess;
  });

  it('CT-02	Login com Username inválido', () => {
    cy.intercept('POST', '**/login').as('login');
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    );
    cy.wait('@login').its('response.statusCode').should('eq', 401);
    loginPage.verifyLoginError();
  });
});
