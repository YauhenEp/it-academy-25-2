const loginPage = require("../pages/loginPage");
const header = require("../pages/component/header");
const leftNavMenu = require("../pages/component/leftNavMenu");

describe('template spec', () => {
  it('passes', () => {
    loginPage.navigate("https://opensource-demo.orangehrmlive.com/");
    loginPage.login("Admin", "admin123");
    leftNavMenu.goToPageByName('Buzz')
  })
})