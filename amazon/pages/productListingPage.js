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
} 

export {ProductListingPage}