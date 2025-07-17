export function logMessage(message: string): void {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

export async function takeScreenshot(page: any, filePath: string): Promise<void> {
  await page.screenshot({ path: filePath });
}

export function comparePrices(price1: number, price2: number): boolean {
  return price1 === price2;
}