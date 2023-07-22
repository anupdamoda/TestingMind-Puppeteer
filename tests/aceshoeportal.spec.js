// @ts-check
const { test, expect } = require('@playwright/test');
import { defineConfig } from '@playwright/test';

test('Verify New Registration - Ace online ShoePortal ', async ({ page }) => {
  await page.goto('https://anupdamoda.github.io/AceOnlineShoePortal/index.html');

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
  await page.waitForSelector('#menuToggle > input[type=checkbox]');
  await page.click('#menuToggle > input[type=checkbox]');
  await page.screenshot({ path: 'screenshot-menubar.png' });
  await page.click('#menu > a:nth-child(2) > li');
  await page.waitForSelector('#NewRegistration');
  await page.screenshot({ path: 'screenshot-ClickNewRegistration.png' });
  await page.click('#NewRegistration');
  await page.screenshot({ path: 'screenshot-EnterFirstname.png' });
  await page.locator('#firstname').type('Robert');
  await page.screenshot({ path: 'screenshot-EnterLastname.png' });
  await page.locator('#lastname').type('Dunett');
  await page.screenshot({ path: 'screenshot-EnterEmailaddress.png' });
  await page.locator('#emailId').type('Robert.Dunnett@gmail.com');
  await page.screenshot({ path: 'screenshot-ContactNumber.png' });
  await page.locator('#contactNumber').type('0434334222');
  await page.screenshot({ path: 'screenshot-EnterUserName.png' });
  await page.locator('#usr').type('Robert.Dunett@gmail.com');
  await page.screenshot({ path: 'screenshot-EnterPassword.png' });
  await page.locator('#pwd').type('P@sw0rd!');
  await page.screenshot({ path: 'screenshot-ClickonSubmit.png' });
  await page.click('#first_form > div > div:nth-child(27) > center > input');

});

