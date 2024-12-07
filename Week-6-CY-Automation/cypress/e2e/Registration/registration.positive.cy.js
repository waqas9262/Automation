import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const password = faker.string.uuid();

describe("Register", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Waqas");
    cy.get("[name='lastName']").type("Khan");
    cy.get('[name="email"]').type(email);
    cy.get('[type="password"]').type(password);
    cy.get('[type="submit"]').click();

    // Verify user role, name, url, page title
    cy.get("a p").should("have.text", "role: user");
    cy.get("h6").should("have.text", "Waqas  Khan");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");

    // Click Profile button
    cy.get('button [data-testid="PersonIcon"]').click();
    // Click Log out
    cy.contains("Logout").click();

    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    // Click on the login button
    cy.get("button").contains("Login").click();

    // Verify if it has user role and title
    cy.get("h6").should("have.text", "Waqas  Khan");
    cy.get("a p").should("have.text", "role: user");
  });
});
