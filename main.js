const { Plugin } = require('obsidian');

class MonthlyNotesPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: 'generate-monthly-notes',
      name: 'Generate Monthly Notes',
      callback: async () => {
        await this.generateMonthlyNotes();
      },
    });
  }

  async generateMonthlyNotes() {
    const moment = window.moment;
    const today = moment();
    const folderPath = 'Monthly Notes Plugin';
    const numberOfDays = 30;
    const dateFormat = 'MM.DD.YYYY dddd';

    // Check if the folder exists, if not, create it
    const folder = this.app.vault.getAbstractFileByPath(folderPath);
    if (!folder) {
      await this.app.vault.createFolder(folderPath);
    }

    const existingNotes = this.app.vault.getMarkdownFiles().filter((note) => note.path.startsWith(folderPath));
    const lastNote = today.clone().add(existingNotes.length, 'days');

    const startDate = lastNote.clone().add(1, 'days');
    for (let i = 0; i < numberOfDays; i++) {
      const noteDate = startDate.clone().add(i, 'days');
      const noteTitle = noteDate.format(dateFormat) + ' notes*';
      const noteContent = `##### DAILY TASKS
- [ ]

___

##### WORK TASKS
- [ ]

____
## ==edit==

___
## ==edit==

____
## ==edit==

_____
## ==edit==

____
## ==edit==

___
## ==edit==

____
## ==edit==

_____
## ==edit==`;

      await this.app.vault.create(folderPath + '/' + noteTitle + '.md', noteContent);
    }
  }
}

module.exports = MonthlyNotesPlugin;
