import { parseCurrency } from '../support/utils';

class HomePage {
  selectorsList() {
    const selectors = {
      sideNavUsername: "[data-test='sidenav-username']",
      sideNavSignOut: "[data-test='sidenav-signout']",
      balance: "[data-test='sidenav-user-balance']",
    };

    return selectors;
  }

  checkHomePage() {
    cy.location('pathname').should('equal', '/');
    cy.get(this.selectorsList().sideNavUsername).should('be.visible');
    cy.get(this.selectorsList().sideNavSignOut).should('be.visible');
  }

  getBalance() {
    return cy
      .get(this.selectorsList().balance)
      .invoke('text')
      .then(parseCurrency);
  }

  checkBalance(expected) {
    cy.get(this.selectorsList().balance, { timeout: 10000 }).should(($el) => {
      expect(parseCurrency($el.text())).to.eq(expected);
    });
  }
}

export default HomePage;
