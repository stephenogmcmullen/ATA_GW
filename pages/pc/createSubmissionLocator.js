class CreateSubmissionLocator {
  constructor(page) {
    this.page = page;
    this.newSubmissionButton = page.getByRole("button", { name: /new submission/i });
    this.accountInput = page.getByLabel(/account|customer/i);
    this.productSelect = page.getByLabel(/product|line of business/i);
    this.effectiveDateInput = page.getByLabel(/effective date/i);
    this.nextButton = page.getByRole("button", { name: /next|continue/i });
    this.saveButton = page.getByRole("button", { name: /save/i });
    this.quoteButton = page.getByRole("button", { name: /quote/i });
    this.submissionNumber = page.getByText(/submission|quote number/i);
  }
}

export { CreateSubmissionLocator };
