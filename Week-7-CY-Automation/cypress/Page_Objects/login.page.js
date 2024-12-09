class LoginPage {
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[name="password"]');
  }
  get loginBtn() {
    return cy.get("button").contains("Login");
  }

  login(email, password) {
    this.emailInput.type("TEST@GMAIL.COM");
    this.passwordInput.type("PASSWORD");
    this.loginBtn.click();
  }

  get title() {
    return cy.title();
  }

  get loginButton() {
    return cy.contains("Login");
  }
}

export default new LoginPage();
