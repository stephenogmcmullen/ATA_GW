class BillingLoginLocator {
  constructor(page) {
    this.page = page;
    this.username = page.getByLabel(/username|user name|email/i);
    this.password = page.getByLabel(/password/i);
    this.signInButton = page.getByRole("button", { name: /sign in|log in/i });
  }
}

export { BillingLoginLocator };
