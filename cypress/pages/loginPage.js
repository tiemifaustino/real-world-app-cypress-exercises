class LoginPage {
  selectorsList() {
    const selectors = {
      signInUsername: "[data-test='signin-username']",
      signInPassword: "[data-test='signin-password']",
      signInSubmit: "[data-test='signin-submit']",
      sideNavUsername: "[data-test='sidenav-username']",
      sideNavSignOut: "[data-test='sidenav-signout']",
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

  verifyLoginSucess() {
    cy.get(this.selectorsList().sideNavUsername).should('be.visible');
    cy.get(this.selectorsList().sideNavSignOut).should('be.visible');
  }

  verifyLoginError() {
    cy.get(this.selectorsList().signInError);
  }
}

export default LoginPage;
