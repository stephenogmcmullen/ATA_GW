class SearchClaimLocator {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: /claim|search/i });
    this.searchButton = page.getByRole("button", { name: /search/i });
    this.results = page.getByRole("table");
    this.claimResult = page.getByRole("link", { name: /claim/i });
  }
}

export { SearchClaimLocator };
