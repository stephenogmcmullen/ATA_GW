import { GuidewireUtilities } from "../guidewireUtilities.js";
import { RenewalLocator } from "../../pages/pc/renewalLocator.js";

class Renewal extends GuidewireUtilities {
  constructor(page) {
    super(page, RenewalLocator);
  }

  async start(effectiveDate) {
    await this.click(this.locators.renewButton, "Renew button");
    if (effectiveDate) {
      await this.fill(this.locators.renewalEffectiveDate, effectiveDate, "renewal effective date");
    }
  }

  async complete() {
    await this.click(this.locators.quoteButton, "Renewal Quote button");
    await this.click(this.locators.bindButton, "Renewal Bind button");
    await this.click(this.locators.issueButton, "Renewal Issue button");
    await this.expectVisible(this.locators.renewalStatus, "renewal status");
  }
}

export { Renewal };
