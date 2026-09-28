import { GuidewireUtilities } from "../guidewireUtilities.js";
import { CreateSubmissionLocator } from "../../pages/pc/createSubmissionLocator.js";

class CreateSubmission extends GuidewireUtilities {
  constructor(page) {
    super(page, CreateSubmissionLocator);
  }

  async start(data) {
    await this.click(this.locators.newSubmissionButton, "New Submission button");
    await this.fill(this.locators.accountInput, data.accountNumber, "account number");
    await this.selectOption(this.locators.productSelect, data.product || "PersonalAuto", "product");
    await this.fill(this.locators.effectiveDateInput, data.effectiveDate, "effective date");
    await this.click(this.locators.nextButton, "Next button");
  }

  async quote() {
    await this.click(this.locators.quoteButton, "Quote button");
    await this.expectVisible(this.locators.submissionNumber, "submission or quote number");
  }
}

export { CreateSubmission };
