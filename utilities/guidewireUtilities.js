import { expect } from "@playwright/test";

class GuidewireUtilities {
  constructor(page, LocatorClass) {
    this.page = page;
    this.locators = new LocatorClass(page);
  }

  async open(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async fill(locator, value, fieldName) {
    if (value === undefined || value === null || value === "") {
      throw new Error(`Missing required test data for ${fieldName}`);
    }
    await locator.fill(String(value));
  }

  async click(locator, controlName) {
    await expect(locator, `${controlName} should be visible`).toBeVisible();
    await locator.click();
  }

  async selectOption(locator, value, fieldName) {
    if (!value) {
      throw new Error(`Missing required test data for ${fieldName}`);
    }
    await locator.selectOption(String(value));
  }

  async expectVisible(locator, description) {
    await expect(locator, `${description} should be visible`).toBeVisible();
  }

  async expectText(value) {
    await expect(this.page.getByText(String(value), { exact: false })).toBeVisible();
  }
}

export { GuidewireUtilities };
