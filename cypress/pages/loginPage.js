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
