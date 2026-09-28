class IssueSubmissionLocator {
  constructor(page) {
    this.page = page;
    this.issueButton = page.getByRole("button", { name: /issue policy|issue/i });
    this.confirmButton = page.getByRole("button", { name: /confirm|yes/i });
    this.issueStatus = page.getByText(/issued|active/i);
    this.policyNumber = page.getByText(/policy number/i);
    this.policySummary = page.getByText(/personal auto|policy summary/i);
  }
}

export { IssueSubmissionLocator };
