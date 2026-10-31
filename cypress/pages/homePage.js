class HomePage {
  selectorsList() {
    const selectors = {
      sideNavUsername: "[data-test='sidenav-username']",
      sideNavSignOut: "[data-test='sidenav-signout']",
    };

    return selectors;
  }

  checkLocation() {
    cy.location('pathname').should('equal', '/');
  }

  checkHomePage() {
    cy.get(this.selectorsList().sideNavUsername).should('be.visible');
    cy.get(this.selectorsList().sideNavSignOut).should('be.visible');
  }
}

export default HomePage;
