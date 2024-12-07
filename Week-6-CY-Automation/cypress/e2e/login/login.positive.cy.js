describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should login with an existing account", () => {
    // Click Login Button on homepage
    cy.get('[href="/auth/login"]').click();
    // type email and password
    cy.get('[name="email"]').type("TEST@GMAIL.COM");
    cy.get('[name="password"]').type("PASSWORD");
    // Click on the login button
    cy.get("button").contains("Login").click();

    // Verify if it has USER role and title
    cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");

    // Verify name
    cy.get("h6").should("have.text", "TEST1  NOTEST");
  });

  it("Should logout Successfully", () => {
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("TEST@GMAIL.COM");
    cy.get('[type="password"]').type("PASSWORD");
    cy.contains("Login").click();
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains("Logout").click();

    // Verify
    cy.title().should("eq", "Login | Delek Homes");
    cy.contains("Login").should("be.visible");
  });
});
