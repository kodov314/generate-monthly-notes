# Monthly Notes Plugin for Obsidian

The Monthly Notes Plugin for Obsidian allows you to automatically generate 30 daily notes in a folder named "Monthly Notes Plugin". The plugin creates the notes with a specific format and helps you quickly set up your notes for the upcoming month.

## Installation

In Obsidian, go to the Settings tab.
1. Navigate to the "Third-party plugins" section.
2. Click "Install plugin" and search for "Monthly Notes Plugin."
3. Click "Install" to add the plugin to your vault.

Alternatively, you can manually add the plugin by downloading the latest release from GitHub and extracting the contents to the plugins folder in your vault.

1. Download the `main.js` and `manifest.json` files from the GitHub repository.
2. In your Obsidian vault, create a folder named `.obsidian/plugins/`.
3. Inside the `.obsidian/plugins/` folder, create another folder named `monthly-notes-plugin/`.
4. Place the `main.js` and `manifest.json` files into the `monthly-notes-plugin/` folder.
5. Restart Obsidian.
6. Go to `Settings > Community plugins`, and enable the Monthly Notes Plugin.

## Usage

To use the Monthly Notes Plugin, follow these steps:

1. Open the Command Palette in Obsidian (`Ctrl/Cmd + P`).
2. Type "Monthly Notes Plugin: Generate Monthly Notes" and select the command.
3. The plugin will check if the "Monthly Notes Plugin" folder exists. If not, it will create the folder.
4. The plugin will generate 30 notes with future dates in the "Monthly Notes Plugin" folder. If there are existing notes in the folder, it will generate an additional 30 notes starting from the last note's date.

Each generated note will have the following format:

##### DAILY TASKS
[ ]
##### WORK TASKS
[ ]
==edit==
==edit==
==edit==
==edit==
==edit==
==edit==
==edit==
==edit==


You can now navigate to the "Monthly Notes Plugin" folder in your Obsidian file explorer and start using the generated notes.
