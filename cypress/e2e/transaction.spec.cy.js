import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import TransactionPage from '../pages/transactionPage';
import userData from '../fixtures/userData.json';

const loginPage = new LoginPage();
const homePage = new HomePage();
const transactionPage = new TransactionPage();
const { userSuccess } = userData;

describe('CT-06 Enviar dinheiro com saldo suficiente', () => {
  beforeEach(() => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userSuccess.username, userSuccess.password);
  });

  it.only('Deve enviar dinheiro com sucesso', () => {
    homePage.checkHomePage();
    homePage.getBalance().then((balanceBefore) => {
      transactionPage.clickNewButton();
      transactionPage.checkTransactionPage();
      transactionPage.clickFirstUser();
      transactionPage.sendMoney(1, 'Teste');
      transactionPage.verifySuccessfulSubmission(1, 'Teste');
      homePage.checkBalance(Number((balanceBefore - 1).toFixed(2)));
    });
  });
});

describe('CT-07 Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    // Implemente os passos do caso de teste aqui
  });
});
