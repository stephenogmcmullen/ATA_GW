import { GuidewireUtilities } from "../guidewireUtilities.js";
import { SearchPolicyLocator } from "../../pages/pc/searchPolicyLocator.js";

class SearchPolicy extends GuidewireUtilities {
  constructor(page) {
    super(page, SearchPolicyLocator);
  }

  async search(policyNumber) {
    await this.fill(this.locators.searchInput, policyNumber, "policy number");
    await this.click(this.locators.searchButton, "Policy search button");
    await this.expectVisible(this.locators.results, "policy search results");
  }
}

export { SearchPolicy };
