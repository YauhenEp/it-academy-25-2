import { $ } from '@wdio/globals'
import Base from './base.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Base {
    /**
     * define selectors using getter methods
     */
    get loginField () {
        return $('[placeholder="Ник или e-mail"]');
    }

    get passwordField () {
        return $('[placeholder="Пароль"]');
    }

    get buttonSubmit () {
        return $('.auth-button_primary');
    }

    get wrongCredentialNotification() {
        return $('.auth-form__description_error')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async fillCredentials(username, password) {
        if(username) {
            await this.loginField.waitForDisplayed();
            await this.loginField.setValue(username);
        }
        if(password) {
            await this.passwordField.waitForDisplayed();
            await this.passwordField.setValue(password);
        }
    }

    async login(username, password) {
        await this.fillCredentials(username, password);
        await this.buttonSubmit.click();
    }
}

export default new LoginPage();
