import { GuidewireUtilities } from "../guidewireUtilities.js";
import { SearchContactLocator } from "../../pages/cc/searchContactLocator.js";

class SearchContact extends GuidewireUtilities {
  constructor(page) {
    super(page, SearchContactLocator);
  }

  async search(contactName) {
    await this.fill(this.locators.searchInput, contactName, "contact name");
    await this.click(this.locators.searchButton, "Contact search button");
    await this.expectVisible(this.locators.results, "contact search results");
  }
}

export { SearchContact };
