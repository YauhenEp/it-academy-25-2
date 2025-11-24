import { test, expect } from '@playwright/test';

// test.use({ storageState: 'playwright/.auth/cookies.json' });


test.describe('Onliner login', async function() {
    test('should get error motification "Неверный логин или пароль"', async ({ page }) => {
        await page.goto('https://www.onliner.by/');
        if(await page.viewportSize().width < 1000) {
            await page.locator('.header-style__underlay').click();
            await page.locator('.header-style__bottom .header-style__link.header-style__link_primary').click();
        } else {
            await page.locator('.auth-bar__item.auth-bar__item--text').click();
        }
        await page.locator('[placeholder="Ник или e-mail"]').fill('Login Name');
        await page.locator('[placeholder="Пароль"]').fill('Password')
        await page.locator('.auth-button_primary').click();
        await expect(await page.locator('.auth-form__description_error')).toHaveText('Неверный логин или пароль')
    })
})