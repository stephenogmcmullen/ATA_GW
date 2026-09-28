import { GuidewireUtilities } from "../guidewireUtilities.js";
import { AddActivityLocator } from "../../pages/pc/addActivityLocator.js";

class AddActivity extends GuidewireUtilities {
  constructor(page) {
    super(page, AddActivityLocator);
  }

  async add(type, subject, dueDate) {
    await this.click(this.locators.activitiesTab.or(this.locators.activitiesLink), "Activities navigation");
    await this.click(this.locators.addActivityButton, "Add Activity button");
    await this.selectOption(this.locators.activityType, type, "activity type");
    await this.fill(this.locators.subjectInput, subject, "activity subject");
    await this.fill(this.locators.dueDateInput, dueDate, "activity due date");
    await this.click(this.locators.saveButton, "Save activity button");
  }
}

export { AddActivity };
