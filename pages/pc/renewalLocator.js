class RenewalLocator {
  constructor(page) {
    this.page = page;
    this.renewButton = page.getByRole("button", { name: /renew|start renewal/i });
    this.renewalEffectiveDate = page.getByLabel(/effective date|renewal date/i);
    this.quoteButton = page.getByRole("button", { name: /quote/i });
    this.bindButton = page.getByRole("button", { name: /bind/i });
    this.issueButton = page.getByRole("button", { name: /issue/i });
    this.renewalStatus = page.getByText(/renewal|renewed/i);
  }
}

export { RenewalLocator };
