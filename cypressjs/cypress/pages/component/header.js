class Header {
  get userDropdownName() {
    return cy.get(".oxd-userdropdown-name");
  }
}

module.exports = new Header();