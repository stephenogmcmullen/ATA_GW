import { GuidewireUtilities } from "../guidewireUtilities.js";
import { PolicyLoginLocator } from "../../pages/pc/policyLoginLocator.js";

class PolicyLogin extends GuidewireUtilities {
  constructor(page) {
    super(page, PolicyLoginLocator);
  }

  async signIn(username, password) {
    await this.fill(this.locators.username, username, "PolicyCenter username");
    await this.fill(this.locators.password, password, "PolicyCenter password");
    await this.click(this.locators.signInButton, "PolicyCenter sign-in button");
  }
}

export { PolicyLogin };
