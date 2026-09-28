class InvoiceDueLocator {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: /invoice|account|search/i });
    this.searchButton = page.getByRole("button", { name: /search/i });
    this.invoiceResult = page.getByRole("link", { name: /invoice/i });
    this.invoiceStatus = page.getByText(/due|open|paid|past due/i);
    this.dueDate = page.getByText(/due date/i);
    this.outstandingBalance = page.getByText(/outstanding|balance|amount due/i);
  }
}

export { InvoiceDueLocator };
