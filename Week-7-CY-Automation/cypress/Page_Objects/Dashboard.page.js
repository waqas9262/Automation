class DashboardPage {
  get roleLbl() {
    return cy.get("a p");
  }
  get FullNameLbl() {
    return cy.get("h6");
  }

  get PersonIconBtn() {
    return cy.get('button [data-testid="PersonIcon"]');
  }
  get LogoutBtn() {
    return cy.contains("Logout");
  }

  get title() {
    return cy.title();
  }

  get url() {
    return cy.url();
  }
}

export default new DashboardPage();
