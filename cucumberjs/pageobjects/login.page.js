const { $ } = require('@wdio/globals')
const Base = require('./base');

class LoginPage extends Base {
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

module.exports = new LoginPage();
