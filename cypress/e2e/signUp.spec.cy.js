import SignUpPage from '../pages/signUpPage';
import LoginPage from '../pages/loginPage';
import userData from '../fixtures/userData.json';

const Chance = require('chance');

const chance = new Chance();
const signUpPage = new SignUpPage();
const loginPage = new LoginPage();
const { userSuccess } = userData;

describe('Exercise-1', () => {
  it('CT-03	Cadastro de um novo usuário com informações válidas', () => {
    loginPage.accessLoginPage();
    signUpPage.accessSignUpPage();
    signUpPage.checkSignUpPage();
    signUpPage.fillForm(
      chance.name(),
      chance.last(),
      chance.string({ length: 5 })
    );
    signUpPage.fillPassword(userSuccess.password, userSuccess.password);
    signUpPage.checkSignUp();
  });

  it('CT-04	Exibição de mensagens de erro nos campos de preenchimento obrigatório do cadastro', () => {
    loginPage.accessLoginPage();
    signUpPage.accessSignUpPage();
    signUpPage.checkSignUpPage();
    signUpPage.fillForm(
      chance.name(),
      chance.last(),
      chance.string({ length: 5 })
    );
    signUpPage.fillPassword(userSuccess.password, userSuccess.password);
    signUpPage.checkSignUp();
  });
});
