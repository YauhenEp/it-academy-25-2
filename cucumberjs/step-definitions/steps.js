const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const loginPage = require('../pageobjects/login.page');
const mainPage = require('../pageobjects/main.page');


Given(/^I am on the main page$/, async function () {
    await mainPage.navigate();
    await mainPage.cookies.acceptAllCookies();
});

When(/^I go to the login page$/, async function () {
    await mainPage.header.goToLoginPage();
})

When(/^I login with (\w+) and (.+)$/, async function (username, password) {
    await loginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async function (message) {
    await expect(await loginPage.wrongCredentialNotification).toBeExisting();
    await expect(await loginPage.wrongCredentialNotification).toHaveText(message);
});

