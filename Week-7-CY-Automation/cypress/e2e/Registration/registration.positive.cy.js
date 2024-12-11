import { faker } from "@faker-js/faker";
import HomePage from "../../Page_Objects/home.page";
import RegistrationPage from "../../Page_Objects/registration.page";
import DashboardPage from "../../Page_Objects/Dashboard.page";
import LoginPage from "../../Page_Objects/login.page";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Register", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    HomePage.registerBtn.click();
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
    LoginPage.title.should("eq", "Login | Delek Homes");
    LoginPage.loginButton.should("be.visible");
  });
});
