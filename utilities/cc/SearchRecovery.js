import { GuidewireUtilities } from "../guidewireUtilities.js";
import { SearchRecoveryLocator } from "../../pages/cc/searchRecoveryLocator.js";

class SearchRecovery extends GuidewireUtilities {
  constructor(page) {
    super(page, SearchRecoveryLocator);
  }

  async search(reference) {
    await this.fill(this.locators.searchInput, reference, "recovery reference");
    await this.click(this.locators.searchButton, "Recovery search button");
    await this.expectVisible(this.locators.results, "recovery search results");
  }
}

export { SearchRecovery };
