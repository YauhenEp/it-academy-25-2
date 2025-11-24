import { Base } from "../base";

class Search extends Base {
    constructor() {
        this.searchField = '#placeholder';
        this.submitButton = '#nav-search-submit-button';
        this.searchDropdownBox = '#searchDropdownBox';
    }

    async getOptionByName(optionName) {
        return `//option[text()='${optionName}']`;
    }

    async getOptionByName1(optionName) {
        const options = {
            'Black Friday Week': `[value="search-alias=black-friday"]`,
            'Arts & crafts': `[value="search-alias=arts-crafts"]`,
        }
        return options[optionName];
    }
}