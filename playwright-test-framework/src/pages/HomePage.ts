export class HomePage {

  
  private clickfromlocation = '//level[contains(text(), "Flying From")]';
  private fromInput = '//level[contains(text(), "Flying From")]';
  private toInput = '#to';
  private frominputfield = '//input[@type="text"]';
  private departureDateInput = '#departure-date';
  private travelersInput = '#travelers';
  private classSelect = '#class';
  private doneButton = '#done-button';
  private searchButton = '#search-button';

  constructor(private page: any) {}

  async goto() {
    await this.page.goto('https://www.shohoz.com/air-tickets');
  }

  async enterTextIntoInput(value: string) {
    await this.page.fill(this.frominputfield, value);
  }

  async clickfrom() {
    await this.page.click(this.clickfromlocation);
  }

  async selectFrom(location: string) {
    await this.page.fill(this.fromInput, location);
  }

  async selectTo(location: string) {
    await this.page.fill(this.toInput, location);
  }

  async setDepartureDate(date: string) {
    await this.page.fill(this.departureDateInput, date);
  }

  async setTravelers(count: number) {
    await this.page.fill(this.travelersInput, count.toString());
  }

  async setClass(travelClass: string) {
    await this.page.selectOption(this.classSelect, travelClass);
  }

  async clickDone() {
    await this.page.click(this.doneButton);
  }

  async clickSearch() {
    await this.page.click(this.searchButton);
  }

  async filterAirlines(airline: string) {
    await this.page.check(`#filter-${airline}`);
  }

  async clickBookTicket() {
    await this.page.click('#book-ticket-button');
  }

  async verifyModal() {
    await this.page.waitForSelector('#modal', { state: 'visible' });
  }

  async captureFlightPrices() {
    return await this.page.$$eval('.flight-price', (prices: Element[]) => prices.map(price => price.textContent as string));
  }
}