import { faker } from "@faker-js/faker";
import homePage from "../../Page_Objects/home.page";
import RegistrationPage from "../../Page_Objects/registration.page";
import DashboardPage from "../../Page_Objects/Dashboard.page";
import loginPage from "../../Page_Objects/login.page";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Register", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    homePage.registerBtn.click();
    RegistrationPage.firstNameInput.type("Waqas");
    RegistrationPage.lastNameInput.type("Khan");
    RegistrationPage.emailInput.type(email);
    RegistrationPage.passwordInput.type(password);
    RegistrationPage.submitBtn.click();

    // Verify
    DashboardPage.roleLbl.should("have.text", "role: user");
    DashboardPage.FullNameLbl.should("have.text", "Waqas  Khan");
    DashboardPage.title.should("eq", "User: Profile | Delek Homes");
    DashboardPage.url.should("include", "dashboard/user/profile");

    DashboardPage.PersonIconBtn.click();
    DashboardPage.LogoutBtn.click();

    // Verify
    loginPage.title.should("eq", "Login | Delek Homes");
    loginPage.loginButton.should("be.visible");
  });
});
