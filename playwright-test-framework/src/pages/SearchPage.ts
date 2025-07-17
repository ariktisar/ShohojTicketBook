import { Page, expect } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.shohoz.com/air-tickets');
  }

  async selectFrom(city: string) {
    await this.page.locator('#from').click();
    await this.page.locator(`text=${city}`).click();
  }

  async selectTo(city: string) {
    await this.page.locator('#to').click();
    await this.page.locator(`text=${city}`).click();
  }

  async setDepartureDate(date: string) {
    await this.page.locator('#departure-date').fill(date);
  }

  async setTravelers(count: number) {
    await this.page.locator('#travellers').click();
    await this.page.locator(`text=${count} Adults`).click();
  }

  async setClass(travelClass: string) {
    await this.page.locator('text=Class').click();
    await this.page.locator(`text=${travelClass}`).click();
  }

  async clickDone() {
    await this.page.locator('text=Done').click();
  }

  async clickSearch() {
    await this.page.locator('text=Search').click();
  }
}
