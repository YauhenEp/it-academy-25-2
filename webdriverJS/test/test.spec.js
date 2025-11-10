import {Builder, until, By} from "selenium-webdriver";
import {expect} from "chai";

describe('Onliner test', () => {
  let driver;
  before(async () => {
    driver = new Builder().forBrowser('firefox').build();
    await driver.manage().window().setSize({width: 1960, height: 1280})
  })

  it('should get error notification with wrong credentials', async () => {
    await driver.get('https://www.onliner.by/');
    await driver.wait(until.elementLocated(By.css('.auth-bar__item.auth-bar__item--text')));
    const enterButton = await driver.findElement(By.css('.auth-bar__item.auth-bar__item--text'));
    await enterButton.click();
    const loginField = await driver.findElement(By.css('[placeholder="Ник или e-mail"]'))
    await loginField.sendKeys('Login Name');
    const passwordField = await driver.findElement(By.css('[placeholder="Пароль"]'))
    await passwordField.sendKeys('Password')
    const loginButton = await driver.findElement(By.css('.auth-button_primary'))
    await loginButton.click();
    await driver.wait(until.elementLocated(By.css('.auth-form__description_error')));
    const errorMessage = await driver.findElement(By.css('.auth-form__description_error'));
    expect(await errorMessage.getText()).to.equal('Неверный логин или пароль')
  })

  after(async () => {
    await driver.quit();
  })
});