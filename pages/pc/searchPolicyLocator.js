class SearchPolicyLocator {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: /policy|search/i });
    this.searchButton = page.getByRole("button", { name: /search/i });
    this.results = page.getByRole("table");
    this.policyResult = page.getByRole("link", { name: /policy/i });
  }
}

export { SearchPolicyLocator };
