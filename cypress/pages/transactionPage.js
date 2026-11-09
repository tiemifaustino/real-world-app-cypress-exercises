class TransactionPage {
  selectorsList() {
    const selectors = {
      newButton: "[data-test='nav-top-new-transaction']",
      userSearchInput: "[data-test='user-list-search-input']",
      usersRows: '.css-1p823my-MuiListItem-root',
      amountInput: "[data-test='transaction-create-amount-input']",
      descriptionInput: "[data-test='transaction-create-description-input']",
      submitPaymentButton: "[data-test='transaction-create-submit-payment']",
      checkIcons: "[data-testid='CheckCircleIcon']",
      confirmationPhrase: '.css-1hbmzt3-MuiGrid-root',
      alertBarSuccess: "[data-test='alert-bar-success']",
      returnTransactionsButton:
        "[data-test='new-transaction-return-to-transactions']",
      createAnotherTransactionButton:
        "[data-test='new-transaction-create-another-transaction']",
    };

    return selectors;
  }

  clickNewButton() {
    cy.get(this.selectorsList().newButton).click();
  }

  checkTransactionPage() {
    cy.location('pathname').should('equal', '/transaction/new');
    cy.get(this.selectorsList().userSearchInput).should('be.visible');
  }

  clickFirstUser() {
    cy.get(this.selectorsList().usersRows).eq(0).click();
  }

  sendMoney(amount, description) {
    cy.get(this.selectorsList().amountInput).type(amount);
    cy.get(this.selectorsList().descriptionInput).type(description);
    cy.get(this.selectorsList().submitPaymentButton).click();
  }

  verifySuccessfulSubmission(amount, description) {
    cy.get(this.selectorsList().alertBarSuccess)
      .contains('Transaction Submitted!')
      .should('be.visible');
    cy.get(this.selectorsList().checkIcons).eq(2).should('be.visible');
    cy.get(this.selectorsList().confirmationPhrase)
      .contains(`Paid $${amount}.00 for ${description}`)
      .should('be.visible');
    cy.get(this.selectorsList().returnTransactionsButton).should('be.visible');
    cy.get(this.selectorsList().createAnotherTransactionButton).should(
      'be.visible'
    );
  }
}

export default TransactionPage;
