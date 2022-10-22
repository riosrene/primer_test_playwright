import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
  await page.getByRole('link', { name: 'Writing Tests' }).click();
  await expect(page).toHaveURL('https://playwright.dev/docs/writing-tests');
  await page.locator('li:has-text("The Example TestAssertionsLocatorsTest IsolationUsing Test Hooks")').getByRole('link', { name: 'Locators' }).click();
  await expect(page).toHaveURL('https://playwright.dev/docs/writing-tests#locators');
  await page.getByRole('link', { name: 'Configuration' }).click();
  await expect(page).toHaveURL('https://playwright.dev/docs/test-configuration');
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await expect(page).toHaveURL('https://playwright.dev/');
});