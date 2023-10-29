// Imports
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MESSAGE_FOOTER, MESSAGE_COLOR, titleCase, sortObjByName } = require("../../utility.js");
const arrayData = require("../../data/test.js"); // Import to use somehow

// Name
const commandName = 'test';

// Single command
module.exports = {
	data: new SlashCommandBuilder()
		.setName(commandName)
		.setDescription(`Template for a basic command`)
		.addStringOption(option =>
		option.setName('name')
			.setDescription(`Specify a keyword`)
			.setRequired(false))
		.addStringOption(option =>
		option.setName('options')
			.setDescription('Options to choose from')
			.setRequired(false)
			.addChoices(
				{ name: 'Option 1', value: '1' },
				{ name: 'Option 2', value: '2' },
			)),
	async execute(interaction) {
		try {
			// Get the keyword
			const keyword = interaction.options.getString('name');
			var option = interaction.options.getString('options');

			// The embed
			const embed = {
				color: MESSAGE_COLOR,
				title: `Keyword: ${keyword}`,
				description: `Your choice: ${option}`,
				// image: {
				// 	url: 'image.png',
				// },
				footer: MESSAGE_FOOTER,
			};

			// Reply with what we looked up
			return await interaction.reply({ embeds: [embed] });

		// Nope
		} catch (e) {
			await interaction.reply(`:x: Failed to fetch ${commandName}!`);
			return console.error(e);
		}
	}
};