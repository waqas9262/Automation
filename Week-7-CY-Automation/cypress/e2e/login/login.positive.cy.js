import LoginPage from "../../Page_Objects/login.page";
import HomePage from "../../Page_Objects/home.page";
import DashboardPage from "../../Page_Objects/Dashboard.page";

describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should login with an existing account", () => {
    HomePage.loginBtn.click();
    LoginPage.emailInput.type("TEST@GMAIL.COM");
    LoginPage.passwordInput.type("PASSWORD");
    LoginPage.loginBtn.click();

    // Verify
    DashboardPage.roleLbl.should("have.text", "role: user");
    DashboardPage.title.should("eq", "User: Profile | Delek Homes");
    DashboardPage.FullNameLbl.should("have.text", "TEST1  NOTEST");
  });

  it("Should logout Successfully", () => {
    HomePage.loginBtn.click();
    LoginPage.emailInput.type("TEST@GMAIL.COM");
    LoginPage.passwordInput.type("PASSWORD");
    LoginPage.loginBtn.click();
    DashboardPage.PersonIconBtn.click();
    DashboardPage.LogoutBtn.click();

    // Verify
    LoginPage.title.should("eq", "Login | Delek Homes");
    LoginPage.loginButton.should("be.visible");
  });
});
