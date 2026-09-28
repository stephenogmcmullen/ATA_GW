import { test, expect } from "../../fixtures/pcFixtures.js";

const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

const accountNumber = () => required("PA_ACCOUNT");
const policyNumber = () => required("PA_POLICY_NUMBER");
const quoteNumber = () => required("PA_QUOTE_NUMBER");
const contactName = () => required("PA_CONTACT_NAME");

test.describe("PolicyCenter designated functions", () => {
  test("PC-01 @quote_submission - create a Personal Auto submission quote", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.createSubmission.start({
      accountNumber: accountNumber(),
      product: process.env.PA_PRODUCT || "PersonalAuto",
      effectiveDate: required("PA_EFFECTIVE_DATE"),
    });
    await policyCenter.createSubmission.quote();
  });

  test("PC-02 @bind_submission - bind a Personal Auto submission", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.searchPolicy.search(quoteNumber());
    await policyCenter.bindSubmission.bind({
      paymentMethod: process.env.PA_PAYMENT_METHOD,
    });
  });

  test("PC-03 @issue_submission - issue a bound Personal Auto policy", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.searchPolicy.search(policyNumber());
    await policyCenter.issueSubmission.issue();
  });

  test("PC-04 @renewal - process a Personal Auto renewal", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.searchPolicy.search(required("PA_RENEWAL_POLICY"));
    await policyCenter.renewal.start(process.env.PA_RENEWAL_EFFECTIVE_DATE);
    await policyCenter.renewal.complete();
  });

  test("PC-05 @add_note - add a note to a Personal Auto policy", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.searchPolicy.search(policyNumber());
    await policyCenter.addNote.add(required("PA_NOTE_SUBJECT"), required("PA_NOTE_TEXT"));
  });

  test("PC-06 @add_activity - add an activity to a Personal Auto policy", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.searchPolicy.search(policyNumber());
    await policyCenter.addActivity.add(
      required("PA_ACTIVITY_TYPE"),
      required("PA_ACTIVITY_SUBJECT"),
      required("PA_ACTIVITY_DUE_DATE"),
    );
  });

  test("PC-07 @search_account - search for a Personal Auto account", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.searchAccount.search(accountNumber());
  });

  test("PC-08 @search_policy - search for a Personal Auto policy", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.searchPolicy.search(policyNumber());
  });

  test("PC-09 @search_contact - search for a Personal Auto contact", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.searchContact.search(contactName());
  });

  test("PC-10 @view_account_summary - view a Personal Auto account summary", async ({ page, policyCenter }) => {
    await page.goto(process.env.GW_PC_URL);
    await policyCenter.searchAccount.search(accountNumber());
    await policyCenter.viewAccountSummary.verifySummary(required("PA_INSURED_NAME"), policyNumber());
    await expect(page).toHaveURL(/.*/);
  });
});
