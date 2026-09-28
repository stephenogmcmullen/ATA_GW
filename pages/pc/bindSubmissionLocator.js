class BindSubmissionLocator {
  constructor(page) {
    this.page = page;
    this.bindButton = page.getByRole("button", { name: /bind/i });
    this.confirmButton = page.getByRole("button", { name: /confirm|yes/i });
    this.paymentMethod = page.getByLabel(/payment method/i);
    this.bindStatus = page.getByText(/bound|binding/i);
    this.policyNumber = page.getByText(/policy number/i);
  }
}

export { BindSubmissionLocator };
