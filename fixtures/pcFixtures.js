import { test as base, expect } from "@playwright/test";
import { PolicyLogin } from "../utilities/pc/PolicyLogin.js";
import { CreateSubmission } from "../utilities/pc/CreateSubmission.js";
import { BindSubmission } from "../utilities/pc/BindSubmission.js";
import { IssueSubmission } from "../utilities/pc/IssueSubmission.js";
import { Renewal } from "../utilities/pc/Renewal.js";
import { AddNote } from "../utilities/pc/AddNote.js";
import { AddActivity } from "../utilities/pc/AddActivity.js";
import { SearchAccount } from "../utilities/pc/SearchAccount.js";
import { SearchPolicy } from "../utilities/pc/SearchPolicy.js";
import { SearchContact } from "../utilities/pc/SearchContact.js";
import { ViewAccountSummary } from "../utilities/pc/ViewAccountSummary.js";

class pcFixtures {
  constructor(page) {
    this.policyLogin = new PolicyLogin(page);
    this.createSubmission = new CreateSubmission(page);
    this.bindSubmission = new BindSubmission(page);
    this.issueSubmission = new IssueSubmission(page);
    this.renewal = new Renewal(page);
    this.addNote = new AddNote(page);
    this.addActivity = new AddActivity(page);
    this.searchAccount = new SearchAccount(page);
    this.searchPolicy = new SearchPolicy(page);
    this.searchContact = new SearchContact(page);
    this.viewAccountSummary = new ViewAccountSummary(page);
  }
}

const test = base.extend({
  policyCenter: async ({ page }, use) => {
    await use(new pcFixtures(page));
  },
});

export { pcFixtures, test, expect };
