import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import UseerCredentials from '../helpers/UserCredentials';
import ApplicationUrl from '../helpers/ApplicationUrl';
import { url } from 'inspector';

test('sanity test', async ({ page }) => {

//כתיבה ללא יצירת פונקציה
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();

const loginPage = new LoginPage(page)
await loginPage.loginToApplication();

await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
await page.locator('[data-test="shopping-cart-link"]').click();
await page.locator('[data-test="checkout"]').click();
await page.locator('[data-test="firstName"]').click();
await page.locator('[data-test="firstName"]').fill('alex');
await page.locator('[data-test="firstName"]').press('Tab');
await page.locator('[data-test="lastName"]').fill('gabrie');
await page.locator('[data-test="lastName"]').press('Tab');
await page.locator('[data-test="postalCode"]').fill('14242');
await page.locator('[data-test="continue"]').click();
await page.locator('[data-test="finish"]').click();
await page.locator('[data-test="back-to-products"]').click();
await page.getByRole('button', { name: 'Open Menu' }).click();
await page.locator('[data-test="reset-sidebar-link"]').click();
await page.locator('[data-test="logout-sidebar-link"]').click();
});


test('demo test', async ({ page }) => {
    
  const loginPage = new LoginPage(page)
  await loginPage.loginToApplication(UseerCredentials.performance_glitch_User,UseerCredentials.Correct_password, ApplicationUrl.Base_Url);
  
  });

  test('demo test 2', async ({ page }) => {
    
  const loginPage = new LoginPage(page)
  await loginPage.loginToApplication(UseerCredentials.Error_User,UseerCredentials.Correct_password, ApplicationUrl.Base_Url);

  });