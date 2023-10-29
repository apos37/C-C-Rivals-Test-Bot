// Require necessary files
require( 'dotenv' ).config();
const { REST, Routes } = require('discord.js');
const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID; // Application ID (also the Bot's User ID)
const guildId = process.env.GUILD_ID; // Server ID
const fs = require('node:fs');
const path = require('node:path');

// Find all commands
const commands = [];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  // Grab all the command files from the commands directory you created earlier
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
  }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    // Are we deploying to our guild only? Or global/all servers?
    const guildOnly = true;

    // The put method is used to fully refresh all commands in the guild with the current set
    var data;
    if (guildOnly) {
      console.log('Deploying slash commands to guild only...');
      data = await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: commands },
      );
    } else {
      console.log('Deploying slash commands globaly...');
      data = await rest.put(
        Routes.applicationCommands(clientId),
        { body: commands },
      );
    }

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();

// (NOTE: global commands take ONE HOUR to update)