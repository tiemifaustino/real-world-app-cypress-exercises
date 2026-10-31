import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const { userSuccess, userFail } = userData;

describe('Exercise-1', () => {
  it('CT-01	Login com Username e Password válidos', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userSuccess.username, userSuccess.password);
    homePage.checkHomePage();
  });

  it('CT-02	Login com Username inválido', () => {
    cy.intercept('POST', '**/login').as('login');
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userFail.username, userFail.password);
    cy.wait('@login').its('response.statusCode').should('eq', 401);
    loginPage.verifyLoginError();
  });
});
