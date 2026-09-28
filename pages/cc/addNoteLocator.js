class AddNoteLocator {
  constructor(page) {
    this.page = page;
    this.notesTab = page.getByRole("tab", { name: /notes/i });
    this.notesLink = page.getByRole("link", { name: /notes/i });
    this.addNoteButton = page.getByRole("button", { name: /add note|new note/i });
    this.subjectInput = page.getByLabel(/subject/i);
    this.noteText = page.getByLabel(/note|text|description/i);
    this.saveButton = page.getByRole("button", { name: /save/i });
  }
}

export { AddNoteLocator };
