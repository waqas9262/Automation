import homePage from "../../Page_Objects/home.page";
import registrationPage from "../../Page_Objects/registration.page";
import RegistrationPage from "../../Page_Objects/registration.page";

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
    registrationPage.Message.should("be.visible");
    registrationPage.url.should("include", "/auth/register");
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
