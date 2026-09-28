class SearchCheckLocator {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: /check|search/i });
    this.searchButton = page.getByRole("button", { name: /search/i });
    this.results = page.getByRole("table");
    this.checkResult = page.getByRole("link", { name: /check/i });
  }
}

export { SearchCheckLocator };
