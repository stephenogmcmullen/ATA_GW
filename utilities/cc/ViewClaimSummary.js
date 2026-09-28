import { GuidewireUtilities } from "../guidewireUtilities.js";
import { ViewClaimSummaryLocator } from "../../pages/cc/viewClaimSummaryLocator.js";

class ViewClaimSummary extends GuidewireUtilities {
  constructor(page) {
    super(page, ViewClaimSummaryLocator);
  }

  async verifySummary(claimNumber, policyNumber, lossDate) {
    await this.expectVisible(this.locators.claimHeader, "claim heading");
    await this.expectText(claimNumber);
    await this.expectText(policyNumber);
    await this.expectText(lossDate);
  }
}

export { ViewClaimSummary };
