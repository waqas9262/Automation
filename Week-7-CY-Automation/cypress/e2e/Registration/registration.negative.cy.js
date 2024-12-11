import homePage from "../../Page_Objects/home.page";
import RegistrationPage from "../../Page_Objects/registration.page";
import loginPage from "../../Page_Objects/login.page";
import DashboardPage from "../../Page_Objects/Dashboard.page";

describe("Register", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register a new user with existing account", () => {
    homePage.registerBtn.click();
    RegistrationPage.firstNameInput.type("Waqas");
    RegistrationPage.lastNameInput.type("Khan");
    RegistrationPage.emailInput.type("TEST@GMAIL.COM");
    RegistrationPage.passwordInput.type("PASSWORD");
    RegistrationPage.submitBtn.click();

    // Verify
    RegistrationPage.Message.should("be.visible");
    RegistrationPage.url.should("include", "/auth/register");

    homePage.loginBtn.click();
    loginPage.emailInput.type("TEST@GMAIL.COM");
    loginPage.passwordInput.type("PASSWORD");
    loginPage.loginBtn.click();

    // Verify
    DashboardPage.roleLbl.should("have.text", "role: user");
    DashboardPage.title.should("eq", "User: Profile | Delek Homes");
    DashboardPage.FullNameLbl.should("have.text", "TEST1  NOTEST");    
  });

  it("Should not register without filling in required fields", () => {
    homePage.registerBtn.click();
    RegistrationPage.submitBtn.click();

    // Verify validation error messages
    RegistrationPage.FirstReq.should("be.visible");
    RegistrationPage.LastReq.should("be.visible");
    RegistrationPage.EmailReq.should("be.visible");
    RegistrationPage.PasswordReq.should("be.visible");
    RegistrationPage.url.should("include", "/auth/register");
  });
});
