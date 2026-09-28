import { GuidewireUtilities } from "../guidewireUtilities.js";
import { IssueSubmissionLocator } from "../../pages/pc/issueSubmissionLocator.js";

class IssueSubmission extends GuidewireUtilities {
  constructor(page) {
    super(page, IssueSubmissionLocator);
  }

  async issue() {
    await this.click(this.locators.issueButton, "Issue Policy button");
    await this.click(this.locators.confirmButton, "Issue confirmation button");
    await this.expectVisible(this.locators.issueStatus, "issued policy status");
    await this.expectVisible(this.locators.policyNumber, "policy number");
  }
}

export { IssueSubmission };
