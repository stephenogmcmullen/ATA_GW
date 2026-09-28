import { GuidewireUtilities } from "../guidewireUtilities.js";
import { InvoiceBilledLocator } from "../../pages/bc/invoiceBilledLocator.js";

class InvoiceBilled extends GuidewireUtilities {
  constructor(page) {
    super(page, InvoiceBilledLocator);
  }

  async generate(accountNumber, billingPeriod) {
    await this.fill(this.locators.accountSearchInput, accountNumber, "billing account");
    await this.click(this.locators.searchButton, "Billing account search button");
    await this.click(this.locators.invoiceTab, "Invoice tab");
    if (billingPeriod) {
      await this.selectOption(this.locators.billingPeriod, billingPeriod, "billing period");
    }
    await this.click(this.locators.generateInvoiceButton, "Generate Invoice button");
    await this.expectVisible(this.locators.invoiceDetails, "invoice details");
  }
}

export { InvoiceBilled };
