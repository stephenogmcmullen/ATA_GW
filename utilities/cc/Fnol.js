import { GuidewireUtilities } from "../guidewireUtilities.js";
import { FnolLocator } from "../../pages/cc/fnolLocator.js";

class Fnol extends GuidewireUtilities {
  constructor(page) {
    super(page, FnolLocator);
  }

  async create(data) {
    await this.click(this.locators.newClaimButton, "New Claim button");
    await this.fill(this.locators.policyInput, data.policyNumber, "policy number");
    await this.fill(this.locators.lossDateInput, data.lossDate, "loss date");
    await this.fill(this.locators.lossLocationInput, data.lossLocation, "loss location");
    await this.selectOption(this.locators.lossType, data.lossType, "loss type");
    await this.fill(this.locators.descriptionInput, data.lossDescription, "loss description");
    await this.fill(this.locators.claimantInput, data.claimantName, "claimant name");
    await this.click(this.locators.submitButton, "Submit FNOL button");
    await this.expectVisible(this.locators.claimNumber, "claim number");
  }
}

export { Fnol };
