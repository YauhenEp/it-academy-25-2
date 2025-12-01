import { Base } from "./base";

class ProductListingPage extends Base {
    get categoryCards() {
        return '.a-link-normal.octopus-pc-category-card-v2-category-link'
    }

    get items() {
        return '.a-link-normal.octopus-pc-item-link'
    }

    async getCategoryCardByName(categoryCardName) {
        return `//h3[contains(text(),'${categoryCardName}')]//ancestor::a`
    }

    async clickFirstItem() {
        await this.items[0].click();
    }

    async clickLastItem() {
        await this.items[this.items.length - 1].click();
    }

    async clickCategoryForChildren() {
        await this.getCategoryCardByName('For Children').click();
    }

    async clickCategoryForAdults() {
        await this.getCategoryCardByName('For Adults').click();
    }
} 

export {ProductListingPage}