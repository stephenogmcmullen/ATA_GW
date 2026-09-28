import { GuidewireUtilities } from "../guidewireUtilities.js";
import { AddNoteLocator } from "../../pages/cc/addNoteLocator.js";

class AddNote extends GuidewireUtilities {
  constructor(page) {
    super(page, AddNoteLocator);
  }

  async add(subject, text) {
    await this.click(this.locators.notesTab.or(this.locators.notesLink), "Notes navigation");
    await this.click(this.locators.addNoteButton, "Add Note button");
    await this.fill(this.locators.subjectInput, subject, "note subject");
    await this.fill(this.locators.noteText, text, "note text");
    await this.click(this.locators.saveButton, "Save note button");
  }
}

export { AddNote };
