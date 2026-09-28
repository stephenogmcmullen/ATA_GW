class AddActivityLocator {
  constructor(page) {
    this.page = page;
    this.activitiesTab = page.getByRole("tab", { name: /activities/i });
    this.activitiesLink = page.getByRole("link", { name: /activities/i });
    this.addActivityButton = page.getByRole("button", { name: /add activity|new activity/i });
    this.activityType = page.getByLabel(/activity type|type/i);
    this.subjectInput = page.getByLabel(/subject/i);
    this.dueDateInput = page.getByLabel(/due date/i);
    this.saveButton = page.getByRole("button", { name: /save/i });
  }
}

export { AddActivityLocator };
