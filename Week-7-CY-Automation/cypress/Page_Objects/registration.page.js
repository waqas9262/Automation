class RegisterationPage {
  get firstNameInput() {
    return cy.get('[name="firstName"]');
  }
  get lastNameInput() {
    return cy.get('[name="lastName"]');
  }
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[type="password"]');
  }
  get submitBtn() {
    return cy.get('[type="submit"]');
  }

  get Message() {
    return cy.contains("Input data validation failed");
  }

  get url() {
    return cy.url();
  }

  get FirstReq() {
    return cy.contains("First name required");
  }
  get LastReq() {
    return cy.contains("Last name required");
  }
  get EmailReq() {
    return cy.contains("Email is required");
  }
  get PasswordReq() {
    return cy.contains("Password is required");
  }
}

export default new RegisterationPage();
