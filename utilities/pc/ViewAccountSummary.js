import { GuidewireUtilities } from "../guidewireUtilities.js";
import { ViewAccountSummaryLocator } from "../../pages/pc/viewAccountSummaryLocator.js";

class ViewAccountSummary extends GuidewireUtilities {
  constructor(page) {
    super(page, ViewAccountSummaryLocator);
  }

  async verifySummary(insuredName, policyNumber) {
    await this.expectVisible(this.locators.accountHeader, "account heading");
    await this.expectText(insuredName);
    await this.expectText(policyNumber);
  }
}

export { ViewAccountSummary };
