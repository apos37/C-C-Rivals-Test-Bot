// Imports
// const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MESSAGE_FOOTER, MESSAGE_COLOR } = require("../../utility.js");

// Name
const commandName = 'avatar';

// Single command
module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription(`View a larger image of a user's avatar`)
    .addUserOption(option =>
      option.setName('member')
        .setDescription(`Specify a guild member`)
        .setRequired(true)),
  async execute(interaction) {
    try {
      // Get the keyword
      const member = interaction.options.getUser('member');

      // The embed
      const embed = {
        color: MESSAGE_COLOR,
        title: `*${member.displayName}*`,
        image: {
          url: member.displayAvatarURL({ size: 2048, dynamic: true }),
        },
        footer: MESSAGE_FOOTER,
      };

      // Reply with what we looked up
      return await interaction.reply({ embeds: [embed] });
    } catch (e) {
      await interaction.reply(`:x: Failed to fetch ${commandName}!`);
      return console.error(e);
    }
  }
};