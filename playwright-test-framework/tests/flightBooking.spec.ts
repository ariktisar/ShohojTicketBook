import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test('Flight booking process', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.goto();
  await homePage.clickfrom();
  await homePage.enterTextIntoInput('Chattogram');
  await homePage.selectFrom('Dhaka');
  await homePage.selectTo('Chittagong');
  await homePage.setDepartureDate('2023-12-01');
  await homePage.setTravelers(1);
  await homePage.setClass('Economy');
  await homePage.clickDone();
  await homePage.clickSearch();
  
  await expect(await homePage.verifyModal()).toBeTruthy();
  const flightPrices = await homePage.captureFlightPrices();
  
  console.log('Available flight prices:', flightPrices);
});