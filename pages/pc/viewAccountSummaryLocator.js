class ViewAccountSummaryLocator {
  constructor(page) {
    this.page = page;
    this.accountHeader = page.getByRole("heading", { name: /account/i });
    this.insuredName = page.getByText(/insured|named insured/i);
    this.policySummary = page.getByText(/policy|personal auto/i);
    this.policyLink = page.getByRole("link", { name: /policy/i });
  }
}

export { ViewAccountSummaryLocator };
