import { expect } from '@wdio/globals'
import mainPage from '../pageobjects/main.page.js'
import loginPage from '../pageobjects/login.page.js'
import { WRONG_CREDENTIAL_NOTIFICATION, CREDENTIALS } from '../helpers/constants.js'

const pathToFile = './test-data/fileName.png'

describe('Onliner login', async function() {
    it('should get error motification "Неверный логин или пароль"', async () => {
        await mainPage.navigate();
        await mainPage.header.goToLoginPage();
        await loginPage.login(CREDENTIALS.invalidCredentials.login, CREDENTIALS.invalidCredentials.password);
        await expect(await loginPage.wrongCredentialNotification).toHaveText(WRONG_CREDENTIAL_NOTIFICATION);
    })
})