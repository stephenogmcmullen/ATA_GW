class SearchRecoveryLocator {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: /recovery|search/i });
    this.searchButton = page.getByRole("button", { name: /search/i });
    this.results = page.getByRole("table");
    this.recoveryResult = page.getByRole("link", { name: /recovery/i });
  }
}

export { SearchRecoveryLocator };
