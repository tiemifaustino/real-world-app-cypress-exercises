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
    cy.visit('/signup');
  }

  clickLinkSignUp() {
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

  checkErrorMessages() {
    const fields = [
      {
        selector: this.selectorsList().firstName,
        message: 'First Name is required',
      },
      {
        selector: this.selectorsList().lastName,
        message: 'Last Name is required',
      },
      {
        selector: this.selectorsList().username,
        message: 'Username is required',
      },
      {
        selector: this.selectorsList().password,
        message: 'Enter your password',
      },
      {
        selector: this.selectorsList().confirmPassword,
        message: 'Confirm your password',
      },
    ];

    fields.forEach(({ selector, message }) => {
      cy.get(selector).find('input').focus().blur();
      cy.get(selector).should('contain', message);
    });

    cy.get(this.selectorsList().submitButton).should('be.disabled');
  }

  fillIncompleteForm(missingField, data) {
    if (missingField !== 'firstName') {
      cy.get(this.selectorsList().firstName).find('input').type(data.firstName);
    }

    if (missingField !== 'lastName') {
      cy.get(this.selectorsList().lastName).find('input').type(data.lastName);
    }

    if (missingField !== 'username') {
      cy.get(this.selectorsList().username).find('input').type(data.username);
    }

    if (missingField !== 'password') {
      cy.get(this.selectorsList().password).find('input').type(data.password);
    }

    if (missingField !== 'confirmPassword') {
      cy.get(this.selectorsList().confirmPassword)
        .find('input')
        .type(data.password);
    }

    // Entra e sai do campo vazio para o erro aparecer
    cy.get(this.selectorsList()[missingField]).find('input').focus().blur();
  }

  checkMissingFieldMessageError(missingField) {
    if (missingField === 'firstName') {
      cy.get(this.selectorsList()[missingField]).should(
        'contain',
        'First Name is required'
      );
    }

    if (missingField === 'lastName') {
      cy.get(this.selectorsList()[missingField]).should(
        'contain',
        'Last Name is required'
      );
    }

    if (missingField === 'username') {
      cy.get(this.selectorsList()[missingField]).should(
        'contain',
        'Username is required'
      );
    }

    if (missingField === 'password') {
      cy.get(this.selectorsList()[missingField]).should(
        'contain',
        'Enter your password'
      );
    }

    if (missingField === 'confirmPassword') {
      cy.get(this.selectorsList()[missingField]).should(
        'contain',
        'Confirm your password'
      );
    }
  }
}

export default SignUpPage;
