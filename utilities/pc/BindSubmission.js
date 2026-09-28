import { GuidewireUtilities } from "../guidewireUtilities.js";
import { BindSubmissionLocator } from "../../pages/pc/bindSubmissionLocator.js";

class BindSubmission extends GuidewireUtilities {
  constructor(page) {
    super(page, BindSubmissionLocator);
  }

  async bind(data = {}) {
    if (data.paymentMethod) {
      await this.selectOption(this.locators.paymentMethod, data.paymentMethod, "payment method");
    }
    await this.click(this.locators.bindButton, "Bind button");
    await this.click(this.locators.confirmButton, "Bind confirmation button");
    await this.expectVisible(this.locators.bindStatus, "bound status");
  }
}

export { BindSubmission };
