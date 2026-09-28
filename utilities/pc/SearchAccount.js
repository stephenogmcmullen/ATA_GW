import { GuidewireUtilities } from "../guidewireUtilities.js";
import { SearchAccountLocator } from "../../pages/pc/searchAccountLocator.js";

class SearchAccount extends GuidewireUtilities {
  constructor(page) {
    super(page, SearchAccountLocator);
  }

  async search(accountNumber) {
    await this.fill(this.locators.searchInput, accountNumber, "account number");
    await this.click(this.locators.searchButton, "Account search button");
    await this.expectVisible(this.locators.results, "account search results");
  }
}

export { SearchAccount };
