import { GuidewireUtilities } from "../guidewireUtilities.js";
import { SearchCheckLocator } from "../../pages/cc/searchCheckLocator.js";

class SearchCheck extends GuidewireUtilities {
  constructor(page) {
    super(page, SearchCheckLocator);
  }

  async search(checkNumber) {
    await this.fill(this.locators.searchInput, checkNumber, "check number");
    await this.click(this.locators.searchButton, "Check search button");
    await this.expectVisible(this.locators.results, "check search results");
  }
}

export { SearchCheck };
