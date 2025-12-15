import { $ } from '@wdio/globals'
import Base from '../base';

class Cookies extends Base {
    constructor() {
        super()
    }
    get acceptAllCookiesButton() {
        return $('#submit-button');
    }

    async acceptAllCookies() {
        await this.acceptAllCookiesButton.waitForClickable();
        await this.acceptAllCookiesButton.click();
        await browser.pause(2500);
    }
}

module.exports = new Cookies();