class InvoiceBilledLocator {
  constructor(page) {
    this.page = page;
    this.accountSearchInput = page.getByRole("textbox", { name: /account|search/i });
    this.searchButton = page.getByRole("button", { name: /search/i });
    this.invoiceTab = page.getByRole("tab", { name: /invoice|billing documents/i });
    this.generateInvoiceButton = page.getByRole("button", { name: /generate|create invoice/i });
    this.billingPeriod = page.getByLabel(/billing period|period/i);
    this.invoiceDetails = page.getByText(/invoice|bill date|total balance/i);
  }
}

export { InvoiceBilledLocator };
