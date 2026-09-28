import { test as base, expect } from "@playwright/test";
import { BillingLogin } from "../utilities/bc/BillingLogin.js";
import { InvoiceBilled } from "../utilities/bc/InvoiceBilled.js";
import { InvoiceDue } from "../utilities/bc/InvoiceDue.js";

class bcFixtures {
  constructor(page) {
    this.billingLogin = new BillingLogin(page);
    this.invoiceBilled = new InvoiceBilled(page);
    this.invoiceDue = new InvoiceDue(page);
  }
}

const test = base.extend({
  billingCenter: async ({ page }, use) => {
    await use(new bcFixtures(page));
  },
});

export { bcFixtures, test, expect };
