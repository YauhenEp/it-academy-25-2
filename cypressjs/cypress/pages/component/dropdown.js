class Dropdown {
    getDropdownByLabel(labelName) {
        return cy.xpath(`//*[@class='oxd-label' and text()='${labelName}']//ancestor::div[@class='oxd-input-group__label-wrapper']//following-sibling::div//div[@class='oxd-select-text oxd-select-text--active`)
    }

    getDropdownOptionByName(optionName) {
        return cy.xpath(`//div[@class='oxd-select-option']//span[text()='${optionName}']`)
    }

    selectOptionByName(labelName, optionName) {
        this.getDropdownByLabel(labelName).click();
        this.getDropdownOptionByName(optionName).click();
    }
}