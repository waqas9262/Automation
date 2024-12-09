import loginPage from "../../Page_Objects/login.page";
import homePage from "../../Page_Objects/home.page";
import DashboardPage from "../../Page_Objects/Dashboard.page";

describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should login with an existing account", () => {
    homePage.loginBtn.click();
    loginPage.emailInput.type("TEST@GMAIL.COM");
    loginPage.passwordInput.type("PASSWORD");
    loginPage.loginBtn.click();

    // Verify
    DashboardPage.roleLbl.should("have.text", "role: user");
    DashboardPage.title.should("eq", "User: Profile | Delek Homes");
    DashboardPage.FullNameLbl.should("have.text", "TEST1  NOTEST");
  });

  it("Should logout Successfully", () => {
    homePage.loginBtn.click();
    loginPage.emailInput.type("TEST@GMAIL.COM");
    loginPage.passwordInput.type("PASSWORD");
    loginPage.loginBtn.click();
    DashboardPage.PersonIconBtn.click();
    DashboardPage.LogoutBtn.click();

    // Verify
    loginPage.title.should("eq", "Login | Delek Homes");
    loginPage.loginButton.should("be.visible");
  });
});
