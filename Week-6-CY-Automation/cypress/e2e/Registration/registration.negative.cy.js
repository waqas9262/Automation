describe("Register", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register a new user with existing account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Waqas");
    cy.get("[name='lastName']").type("Khan");
    cy.get('[name="email"]').type("TEST@GMAIL.COM");
    cy.get('[type="password"]').type("TEST@GMAIL.COM");
    cy.get('[type="submit"]').click();

    // Verify user role, name, url, page title
    cy.contains("Input data validation failed").should("be.visible");
    cy.url().should("include", "/auth/register");
  });

  it("Should not register without filling in required fields", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[type="submit"]').click();

    // Verify validation error messages
    cy.contains("First name required").should("be.visible");
    cy.contains("Last name required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
    cy.url().should("include", "/auth/register");
  });
});
