import { GuidewireUtilities } from "../guidewireUtilities.js";
import { ClaimLoginLocator } from "../../pages/cc/claimLoginLocator.js";

class ClaimLogin extends GuidewireUtilities {
  constructor(page) {
    super(page, ClaimLoginLocator);
  }

  async signIn(username, password) {
    await this.fill(this.locators.username, username, "ClaimCenter username");
    await this.fill(this.locators.password, password, "ClaimCenter password");
    await this.click(this.locators.signInButton, "ClaimCenter sign-in button");
  }
}

export { ClaimLogin };
