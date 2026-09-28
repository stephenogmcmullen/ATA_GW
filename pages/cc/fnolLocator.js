class FnolLocator {
  constructor(page) {
    this.page = page;
    this.newClaimButton = page.getByRole("button", { name: /new claim|first notice of loss|fnol/i });
    this.policyInput = page.getByLabel(/policy number|policy/i);
    this.lossDateInput = page.getByLabel(/loss date/i);
    this.lossLocationInput = page.getByLabel(/loss location|location/i);
    this.lossType = page.getByLabel(/loss type/i);
    this.descriptionInput = page.getByLabel(/description/i);
    this.claimantInput = page.getByLabel(/claimant/i);
    this.submitButton = page.getByRole("button", { name: /submit|save|report loss/i });
    this.claimNumber = page.getByText(/claim number/i);
  }
}

export { FnolLocator };
