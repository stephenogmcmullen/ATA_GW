import { test, expect } from "../../fixtures/ccFixtures.js";

const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

const policyNumber = () => required("PA_POLICY_NUMBER");
const claimNumber = () => required("PA_CLAIM_NUMBER");
const contactName = () => required("PA_CLAIM_CONTACT");

test.describe("ClaimCenter designated functions", () => {
  test("CC-01 @fnol - capture first notice of loss", async ({ page, claimCenter }) => {
    await page.goto(process.env.GW_CC_URL);
    await claimCenter.fnol.create({
      policyNumber: policyNumber(),
      lossDate: required("PA_LOSS_DATE"),
      lossLocation: required("PA_LOSS_LOCATION"),
      lossType: required("PA_LOSS_TYPE"),
      lossDescription: required("PA_LOSS_DESCRIPTION"),
      claimantName: required("PA_CLAIMANT_NAME"),
    });
  });

  test("CC-02 @search_policy - search for a Personal Auto policy", async ({ page, claimCenter }) => {
    await page.goto(process.env.GW_CC_URL);
    await claimCenter.searchPolicy.search(policyNumber());
  });

  test("CC-03 @add_note - add a note to a Personal Auto claim", async ({ page, claimCenter }) => {
    await page.goto(process.env.GW_CC_URL);
    await claimCenter.searchClaim.search(claimNumber());
    await claimCenter.addNote.add(required("CC_NOTE_SUBJECT"), required("CC_NOTE_TEXT"));
  });

  test("CC-04 @add_activity - add an activity to a Personal Auto claim", async ({ page, claimCenter }) => {
    await page.goto(process.env.GW_CC_URL);
    await claimCenter.searchClaim.search(claimNumber());
    await claimCenter.addActivity.add(
      required("CC_ACTIVITY_TYPE"),
      required("CC_ACTIVITY_SUBJECT"),
      required("CC_ACTIVITY_DUE_DATE"),
    );
  });

  test("CC-05 @search_claim - search for a Personal Auto claim", async ({ page, claimCenter }) => {
    await page.goto(process.env.GW_CC_URL);
    await claimCenter.searchClaim.search(claimNumber());
  });

  test("CC-06 @search_contact - search for a Personal Auto contact", async ({ page, claimCenter }) => {
    await page.goto(process.env.GW_CC_URL);
    await claimCenter.searchContact.search(contactName());
  });

  test("CC-07 @search_check - search for a claim check", async ({ page, claimCenter }) => {
    await page.goto(process.env.GW_CC_URL);
    await claimCenter.searchCheck.search(required("PA_CHECK_NUMBER"));
  });

  test("CC-08 @search_recovery - search for a claim recovery", async ({ page, claimCenter }) => {
    await page.goto(process.env.GW_CC_URL);
    await claimCenter.searchRecovery.search(required("PA_RECOVERY_REFERENCE"));
  });

  test("CC-09 @view_claim_summary - view a Personal Auto claim summary", async ({ page, claimCenter }) => {
    await page.goto(process.env.GW_CC_URL);
    await claimCenter.searchClaim.search(claimNumber());
    await claimCenter.viewClaimSummary.verifySummary(
      claimNumber(),
      policyNumber(),
      required("PA_LOSS_DATE"),
    );
    await expect(page).toHaveURL(/.*/);
  });
});
