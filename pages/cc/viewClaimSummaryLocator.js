class ViewClaimSummaryLocator {
  constructor(page) {
    this.page = page;
    this.claimHeader = page.getByRole("heading", { name: /claim/i });
    this.claimNumber = page.getByText(/claim number/i);
    this.policyDetails = page.getByText(/policy|insured/i);
    this.lossSummary = page.getByText(/loss date|loss location|loss type/i);
  }
}

export { ViewClaimSummaryLocator };
