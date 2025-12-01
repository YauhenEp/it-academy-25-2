import { $ } from '@wdio/globals'
import Base from './base.js';
import header from './components/header.js'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Base {
    constructor() {
        this.header = header;
    }
}

export default new MainPage();
