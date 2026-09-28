class SearchContactLocator {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: /contact|name|search/i });
    this.searchButton = page.getByRole("button", { name: /search/i });
    this.results = page.getByRole("table");
    this.contactResult = page.getByRole("link", { name: /contact/i });
  }
}

export { SearchContactLocator };
