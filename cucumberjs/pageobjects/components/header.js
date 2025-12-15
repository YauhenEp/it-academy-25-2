import { $ } from '@wdio/globals'
import Base from '../base';

class Header extends Base {
    constructor() {
        super()
    }
    get enterButton() {
        return $('.auth-bar__item.auth-bar__item--text');
    }

    get openRightMenuButton() {
        return $('.header-style__underlay');
    }

    get rightMenuEnterButton() {
        return $('.header-style__bottom .header-style__link.header-style__link_primary');
    }

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

module.exports = new Header();
