class SignUpPage {
  selectorsList() {
    const selectors = {
      signUpLink: "[data-test='signup']",
      signUpTitle: "[data-test='signup-title']",
      firstName: "[data-test='signup-first-name']",
      lastName: "[data-test='signup-last-name']",
      username: "[data-test='signup-username']",
      password: "[data-test='signup-password']",
      confirmPassword: "[data-test='signup-confirmPassword']",
      submitButton: "[data-test='signup-submit']",
    };

    return selectors;
  }

  accessSignUpPage() {
    cy.get(this.selectorsList().signUpLink).click();
  }

  checkSignUpPage() {
    cy.location('pathname').should('equal', '/signup');
    cy.get(this.selectorsList().signUpTitle).should('be.visible');
  }

  fillForm(firstName, lastName, username) {
    cy.get(this.selectorsList().firstName).type(firstName);
    cy.get(this.selectorsList().lastName).type(lastName);
    cy.get(this.selectorsList().username).type(username);
  }

  fillPassword(password, confirmPassword) {
    cy.get(this.selectorsList().password).type(password);
    cy.get(this.selectorsList().confirmPassword).type(confirmPassword);
  }

  checkSignUp() {
    cy.get(this.selectorsList().submitButton).click();
    cy.location('pathname').should('equal', '/signin');
  }
}

export default SignUpPage;
