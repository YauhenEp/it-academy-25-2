const loginPage = require("../pages/loginPage");
const header = require("../pages/component/header");

describe("test login", () => {
  it("should go to main page with valid credentials", () => {
    loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
    loginPage.login("Admin", "admin123");
    cy.validateText(
      header.userDropdownName,
      "First Name Last Name",
    );
  });

  it("should be error notifications with invalid login", () => {
    loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
    loginPage.login("sdfd", "admin123");
    cy.get(".oxd-alert-content > .oxd-text")
      .invoke("text")
      .should("equal", "Invalid credentials");
  });

  it("should be error notifications with invalid password", () => {
    loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
    loginPage.login("Admin", "admindfdf123");
    cy.get(".oxd-alert-content > .oxd-text")
      .invoke("text")
      .should("equal", "Invalid credentials");
  });

  it("should be error notifications with invalid credentials", () => {
    loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
    loginPage.login("Admifgfgn", "admindfdf123");
    // cy.get('selector').click();
    cy.get(".oxd-alert-content > .oxd-text")
      .invoke("text")
      .should("equal", "Invalid credentials");
  });

  it("should be required notifications with empty login field", () => {
    loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
    loginPage.login(" ", "admindfdf123");
    cy.xpath(`//input[@name='username']/../following-sibling::span`)
      .invoke("text")
      .should("equal", "Required");
  });
});