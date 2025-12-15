class LeftNavMenu {
  getMenuItemByName(name) {
    return cy.xpath(
      `//span[contains(@class,"oxd-main-menu-item--name") and text()="${name}"]/.. `,
    );
  }

  get search() {
    return cy.get(".oxd-main-menu-search .oxd-input.oxd-input--active");
  }

  get expandMenuButton() {
    return cy.get(".oxd-icon-button.oxd-main-menu-button");
  }

  goToPageByName(pageName) {
    if (this.search.invoke("attr", "class").should("not.contain", "toggled")) {
      this.expandMenuButton.click();
    }
    this.getMenuItemByName(pageName).click();
  }
}

module.exports = new LeftNavMenu();