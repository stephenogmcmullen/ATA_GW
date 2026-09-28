import { GuidewireUtilities } from "../guidewireUtilities.js";
import { SearchClaimLocator } from "../../pages/cc/searchClaimLocator.js";

class SearchClaim extends GuidewireUtilities {
  constructor(page) {
    super(page, SearchClaimLocator);
  }

  async search(claimNumber) {
    await this.fill(this.locators.searchInput, claimNumber, "claim number");
    await this.click(this.locators.searchButton, "Claim search button");
    await this.expectVisible(this.locators.results, "claim search results");
  }
}

export { SearchClaim };
