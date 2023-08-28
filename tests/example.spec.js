// @ts-check
const { test, expect } = require('@playwright/test');
const { loginPage } = require('../pages/loginPage');

test.describe('Login tests', ()=> {
  test.beforeEach(async ({page}) => {
    let somePage = new loginPage(page);

    await somePage.goto();
  })

  test('RANDOM TEST', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page.locator('.css-47sehv')).toBeVisible();
  });
  
})