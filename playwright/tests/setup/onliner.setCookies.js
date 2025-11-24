import { test } from '@playwright/test';
import path from 'path';

const cookiesFile = path.join(__dirname, '../../playwright/.auth/cookies.json');

test('Set cookies', async ({ page }) => {
    await page.goto('https://www.onliner.by/');
    await page.locator('#submit-button').click();
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
    await page.context().storageState({ path: cookiesFile });
})