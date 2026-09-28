import { test as base, expect } from "@playwright/test";
import { ClaimLogin } from "../utilities/cc/ClaimLogin.js";
import { Fnol } from "../utilities/cc/Fnol.js";
import { SearchPolicy } from "../utilities/cc/SearchPolicy.js";
import { AddNote } from "../utilities/cc/AddNote.js";
import { AddActivity } from "../utilities/cc/AddActivity.js";
import { SearchClaim } from "../utilities/cc/SearchClaim.js";
import { SearchContact } from "../utilities/cc/SearchContact.js";
import { SearchCheck } from "../utilities/cc/SearchCheck.js";
import { SearchRecovery } from "../utilities/cc/SearchRecovery.js";
import { ViewClaimSummary } from "../utilities/cc/ViewClaimSummary.js";

class ccFixtures {
  constructor(page) {
    this.claimLogin = new ClaimLogin(page);
    this.fnol = new Fnol(page);
    this.searchPolicy = new SearchPolicy(page);
    this.addNote = new AddNote(page);
    this.addActivity = new AddActivity(page);
    this.searchClaim = new SearchClaim(page);
    this.searchContact = new SearchContact(page);
    this.searchCheck = new SearchCheck(page);
    this.searchRecovery = new SearchRecovery(page);
    this.viewClaimSummary = new ViewClaimSummary(page);
  }
}

const test = base.extend({
  claimCenter: async ({ page }, use) => {
    await use(new ccFixtures(page));
  },
});

export { ccFixtures, test, expect };
