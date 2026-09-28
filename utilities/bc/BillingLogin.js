import { GuidewireUtilities } from "../guidewireUtilities.js";
import { BillingLoginLocator } from "../../pages/bc/billingLoginLocator.js";

class BillingLogin extends GuidewireUtilities {
  constructor(page) {
    super(page, BillingLoginLocator);
  }

  async signIn(username, password) {
    await this.fill(this.locators.username, username, "BillingCenter username");
    await this.fill(this.locators.password, password, "BillingCenter password");
    await this.click(this.locators.signInButton, "BillingCenter sign-in button");
  }
}

export { BillingLogin };
