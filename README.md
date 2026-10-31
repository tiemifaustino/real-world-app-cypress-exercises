<div align="center">

# 🧪 Real World App • Exercícios de Cypress

Exercícios de **testes automatizados E2E** com **Cypress** e **JavaScript**, usando o padrão **Page Objects**, aplicados na aplicação **Cypress Real World App**.

![Cypress](https://img.shields.io/badge/Cypress-15.x-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-formatter-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

</div>

---

## 📖 Sobre o projeto

Este repositório reúne os **exercícios de automação de testes** que estou desenvolvendo durante a mentoria **Guardião da Qualidade** 🛡️.

O objetivo é praticar:

- ✅ Automação de testes end-to-end com **Cypress**
- ✅ Organização do código com o padrão **Page Objects**
- ✅ Escrita de testes legíveis, reutilizáveis e fáceis de manter
- ✅ Documentação de casos de teste

> 💡 Este repositório contém **apenas os testes**. A aplicação testada fica em outro repositório (veja a seção abaixo).

---

## 🎯 Aplicação testada

Os testes são escritos para o **Cypress Real World App (RWA)**, um app de pagamentos full-stack (React + Express) criado pela equipe do Cypress para fins educacionais.

|                                      |                                                                                         |
| ------------------------------------ | --------------------------------------------------------------------------------------- |
| 🔗 **Repositório**                   | [cypress-io/cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app) |
| 🌐 **Frontend (local)**              | `http://localhost:3000`                                                                 |
| ⚙️ **API / Backend (local)**         | `http://localhost:3001`                                                                 |
| 🔑 **Senha dos usuários de exemplo** | `s3cret`                                                                                |

Para ver os usuários disponíveis, rode `yarn list:dev:users` dentro do projeto do RWA.

---

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/): framework de testes E2E
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): linguagem dos testes
- [Node.js](https://nodejs.org/) + npm: ambiente e gerenciador de pacotes
- [Prettier](https://prettier.io/): padronização do código

---

## 🏗️ Arquitetura: Page Objects

Cada página (ou parte importante) da aplicação possui uma classe/objeto com seus **elementos** e **ações**. Os testes ficam enxutos e só descrevem o _comportamento_, enquanto os detalhes de seletores ficam centralizados nas pages.

**📄 `cypress/pages/loginPage.js`**: seletores e ações da página de login

```js
class LoginPage {
  selectorsList() {
    const selectors = {
      signInUsername: "[data-test='signin-username']",
      signInPassword: "[data-test='signin-password']",
      signInSubmit: "[data-test='signin-submit']",
      signInError: "[data-test='signin-error']",
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit('/signin');
  }

  loginWithUser(username, password) {
    cy.get(this.selectorsList().signInUsername).type(username);
    cy.get(this.selectorsList().signInPassword).type(password);
    cy.get(this.selectorsList().signInSubmit).click();
  }

  verifyLoginError() {
    cy.get(this.selectorsList().signInError);
  }
}

export default LoginPage;
```

**🧪 `cypress/e2e/login.spec.cy.js`**: o teste só descreve o comportamento

```js
import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const { userSuccess, userFail } = userData;

describe('Exercise-1', () => {
  it('CT-01 Login com Username e Password válidos', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userSuccess.username, userSuccess.password);
    homePage.checkHomePage();
  });

  it('CT-02 Login com Username inválido', () => {
    cy.intercept('POST', '**/login').as('login');
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userFail.username, userFail.password);
    cy.wait('@login').its('response.statusCode').should('eq', 401);
    loginPage.verifyLoginError();
  });
});
```

**🗂️ `cypress/fixtures/userData.json`**: massa de dados separada dos testes

```json
{
  "userSuccess": { "username": "Heath93", "password": "s3cret" },
  "userFail": { "username": "test2026", "password": "s3cret" }
}
```

✨ **Vantagens:** menos duplicação, manutenção mais simples (mudou um seletor? ajusta em um só lugar) e testes mais fáceis de ler.

---

## 📂 Estrutura do repositório

```
real-world-app-cypress-exercises/
├── .vscode/
│   └── settings.json         # Configurações do VS Code
├── cypress/
│   ├── e2e/                  # Specs (arquivos de teste)
│   │   ├── login.spec.cy.js
│   │   └── signUp.spec.cy.js
│   ├── fixtures/
│   │   └── userData.json     # Massa de dados
│   ├── pages/                # Page Objects
│   │   ├── homePage.js
│   │   ├── loginPage.js
│   │   └── signUpPage.js
│   └── support/              # Comandos customizados e configurações de suporte
├── test-cases/
│   └── exercise-1.md         # Documentação dos casos de teste
├── .gitignore
├── .prettierrc.json          # Regras de formatação
├── cypress.config.js         # Configuração do Cypress
├── package.json
└── package-lock.json
```

---

## ✅ Cenários automatizados

| Exercício  | Spec                | Caso de teste | Descrição                                                            |
| ---------- | ------------------- | ------------- | -------------------------------------------------------------------- |
| Exercise-1 | `login.spec.cy.js`  | CT-01         | Login com Username e Password válidos                                |
| Exercise-1 | `login.spec.cy.js`  | CT-02         | Login com Username inválido (valida status `401` via `cy.intercept`) |
| —          | `signUp.spec.cy.js` | —             | Cadastro de usuário                                                  |

📝 A documentação detalhada dos casos de teste está na pasta [`test-cases`](./test-cases).

---

## 🚀 Como instalar e rodar

Para executar os testes você precisa de **dois projetos rodando**: a aplicação (RWA) e este repositório de testes.

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) (use a versão indicada no arquivo `.node-version` do RWA)
- [Git](https://git-scm.com/)
- [Yarn Classic (v1)](https://classic.yarnpkg.com/): necessário para o RWA

```bash
npm install yarn@1 -g
```

> ⚠️ O RWA **não é compatível com Yarn Modern** (v2 ou superior).

---

### 1️⃣ Subir a aplicação (Cypress Real World App)

```bash
# Clone o app que será testado
git clone https://github.com/cypress-io/cypress-realworld-app.git
cd cypress-realworld-app

# Instale as dependências
yarn

# Inicie o app (frontend na 3000 e backend na 3001)
yarn dev
```

> 🍎 **Mac com chip M1/M2/M3?** Use `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install`.

Deixe esse terminal aberto. Ao acessar `http://localhost:3000` você deve ver a tela de login do app. 🎉

---

### 2️⃣ Instalar este projeto de testes

Em **outro terminal**:

```bash
# Clone este repositório
git clone https://github.com/tiemifaustino/real-world-app-cypress-exercises.git
cd real-world-app-cypress-exercises

# Instale as dependências
npm install
```

---

### 3️⃣ Executar os testes

**🖥️ Modo interativo** (abre a interface do Cypress):

```bash
npx cypress open
```

**⚡ Modo headless** (roda tudo no terminal):

```bash
npx cypress run
```

**🎯 Rodar um arquivo específico:**

```bash
npx cypress run --spec "cypress/e2e/login.spec.cy.js"
```

> 💡 **Dica:** se quiser rodar com `npm test` ou `npm run cy:open`, adicione scripts no `package.json`:
>
> ```json
> "scripts": {
>   "cy:open": "cypress open",
>   "cy:run": "cypress run"
> }
> ```

---

## 🧩 Solução de problemas

| Problema                           | Solução                                                                                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Porta `3000` ou `3001` em uso      | Feche o outro processo que está usando a porta ou altere `PORT` / `VITE_BACKEND_PORT` no `.env` do RWA (e ajuste a `baseUrl` no `cypress.config.js`). |
| Testes falhando por falta de dados | Reinicie o RWA com `yarn dev`: o banco é repopulado a cada inicialização.                                                                             |
| Erro de conexão (`ECONNREFUSED`)   | Verifique se o RWA está rodando antes de iniciar o Cypress.                                                                                           |

---

## 📚 Referências

- 📘 [Documentação do Cypress](https://docs.cypress.io/)
- 🧪 [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app)
- 🛡️ Mentoria **Guardião da Qualidade**

---

## 👩‍💻 Autora

Feito por **Tiemi Faustino**

[![GitHub](https://img.shields.io/badge/GitHub-tiemifaustino-181717?style=flat&logo=github)](https://github.com/tiemifaustino)

---

<div align="center">

⭐ Se este repositório te ajudou, deixe uma estrela!

</div>
