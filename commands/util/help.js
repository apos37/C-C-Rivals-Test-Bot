// Imports
const { hyperlink } = require('discord.js');
const { SlashCommandBuilder, userMention } = require('@discordjs/builders');
const { MESSAGE_COLOR } = require("../../utility.js");
const fs = require('node:fs');
const path = require('node:path');

// Name
const commandName = 'help';

// Export as a module for other files to require()
module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription(`Learn how to use C&C Rivals Bot`),  
  async execute(interaction) {
    try {
      
      // Find all commands
      const commands = [];
      // Grab all the command folders from the commands
      const foldersPath = path.join(__dirname, '../../commands');
      const commandFolders = fs.readdirSync(foldersPath);

      for (const folder of commandFolders) {
        // Grab all the command files
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
        for (const file of commandFiles) {
          const filePath = path.join(commandsPath, file);
          const command = require(filePath);
          if ('data' in command && 'execute' in command) {
            const commandData = command.data.toJSON();
            if (commandData.name != 'help') {
              commands.push(`\`/${commandData.name}\` - ${commandData.description}`);
            }
          } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
          }
        }
      }

      // The embed
      const embed = {
        color: MESSAGE_COLOR,
        title: `**C&C Rivals Bot Help**`,
        description: `** **\n${commands.join('\n\n')}\n\n\n**Support Server:**\nJoin the ${hyperlink('C&C Rivals Resources Discord Server', 'https://discord.gg/KYqvSvtHfF')} and speak to Aristocles (aka Gandhi) for any help, updates or if you have any questions.\n\n_Developed by Aristocles for Command & Conquer Rivals._`,
      };

      // Reply with what we looked up
      return await interaction.reply({ embeds: [embed], ephemeral: true });
    } catch (e) {
      await interaction.reply(`:x: Uh oh! The \`/help\` command is out of order. Please contact Aristocles (aka Gandhi) on the ${hyperlink('C&C Rivals Resources discord server', 'https://discord.gg/KYqvSvtHfF')} for assistance.`);
      return console.error(e);
    }
  }
};
