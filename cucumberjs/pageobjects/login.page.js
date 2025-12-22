const { $ } = require('@wdio/globals')
const Base = require('./base');

/**
 * Page object representing the login page.
 * @extends Base
 */
class LoginPage extends Base {
    /**
     * Login input field (username or email)
     * @type {WebdriverIO.Element}
     */
    get loginField () {
        return $('[placeholder="Ник или e-mail"]');
    }

    /**
     * Password input field
     * @type {WebdriverIO.Element}
     */
    get passwordField () {
        return $('[placeholder="Пароль"]');
    }

    /**
     * Submit button element
     * @type {WebdriverIO.Element}
     */
    get buttonSubmit () {
        return $('.auth-button_primary');
    }

    /**
     * Notification element for wrong credentials
     * @type {WebdriverIO.Element}
     */
    get wrongCredentialNotification() {
        return $('.auth-form__description_error')
    }

    /**
     * Fill login form fields if values provided
     * @param {string} [username] - username or email
     * @param {string} [password]
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

    /**
     * Submit the login form
     * @param {string} username
     * @param {string} password
     */
    async login(username, password) {
        await this.fillCredentials(username, password);
        await this.buttonSubmit.click();
    }
}

module.exports = new LoginPage();
