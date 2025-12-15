const Base = require('./base')

class LoginPage extends Base {
get usernameField() {
    return cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    );
  }

  get passwordField() {
    return cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
    );
  }

  get loginButton() {
    return cy.get(".oxd-button");
  }

  login(login, password) {
    this.usernameField.type(login);
    this.passwordField.type(password);
    this.loginButton.click();
  }
}

module.exports = new LoginPage();