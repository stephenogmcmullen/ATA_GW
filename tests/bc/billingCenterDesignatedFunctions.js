import { test } from "../../fixtures/bcFixtures.js";

const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

test.describe("BillingCenter designated functions", () => {
  test("BC-01 @invoice_billed - generate an invoice for a Personal Auto policy", async ({ page, billingCenter }) => {
    await page.goto(process.env.GW_BC_URL);
    await billingCenter.invoiceBilled.generate(
      required("PA_BILLING_ACCOUNT"),
      required("PA_BILLING_PERIOD"),
    );
  });

  test("BC-02 @invoice_due - view Personal Auto invoice due status", async ({ page, billingCenter }) => {
    await page.goto(process.env.GW_BC_URL);
    await billingCenter.invoiceDue.search(required("PA_INVOICE_NUMBER"));
    await billingCenter.invoiceDue.verifyDueStatus(process.env.PA_INVOICE_STATUS || "Due");
  });
});
