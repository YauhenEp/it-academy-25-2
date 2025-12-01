import { $ } from '@wdio/globals'
import Base from '../base.js';

class Header extends Base {
    get enterButton() {
        return $('.auth-bar__item.auth-bar__item--tex');
    }

    get openRightMenuButton() {
        return $('.header-style__underlay');
    }

    get rightMenuEnterButton() {
        return $('.header-style__bottom .header-style__link.header-style__link_primary');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async goToLoginPage() {
        if(await (await browser.getWindowSize()).width < 1000) {
            await this.openRightMenuButton.waitForClickable();
            await this.openRightMenuButton.click();
            await this.rightMenuEnterButton.waitForClickable();
            await this.rightMenuEnterButton.click();
        } else {
            await this.enterButton.click();
        }
    }
}

export default new Header();