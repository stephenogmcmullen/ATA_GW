import { GuidewireUtilities } from "../guidewireUtilities.js";
import { InvoiceDueLocator } from "../../pages/bc/invoiceDueLocator.js";

class InvoiceDue extends GuidewireUtilities {
  constructor(page) {
    super(page, InvoiceDueLocator);
  }

  async search(invoiceNumber) {
    await this.fill(this.locators.searchInput, invoiceNumber, "invoice number");
    await this.click(this.locators.searchButton, "Invoice search button");
    await this.expectVisible(this.locators.invoiceResult, "invoice result");
  }

  async verifyDueStatus(status = "Due") {
    await this.expectText(status);
    await this.expectVisible(this.locators.dueDate, "invoice due date");
    await this.expectVisible(this.locators.outstandingBalance, "outstanding balance");
  }
}

export { InvoiceDue };
