class SearchAccountLocator {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: /account|search/i });
    this.searchButton = page.getByRole("button", { name: /search/i });
    this.results = page.getByRole("table");
    this.accountResult = page.getByRole("link", { name: /account/i });
  }
}

export { SearchAccountLocator };
