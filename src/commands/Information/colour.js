const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('colour')
		.setDescription('Asks your fav color'),
	async execute(interaction, client) {
		const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('colour-select')
                    .setPlaceholder('Nothing is selected.')
                    .setMinValues(1)
                    .setMaxValues(2)
                    .addOptions([
                        {
                            label: `Red`,
                            description: `Your fav colour is red.`,
                            value: `red`
                        },
                        {
                            label: `Blue`,
                            description: `Your fav colour is blue.`,
                            value: `blue`
                        },
                        {
                            label: `Green`,
                            description: `Your fav colour is green.`,
                            value: `green`
                        },
                        {
                            label: `yellow`,
                            description: `Your fav colour is yellow.`,
                            value: `yellow`
                        },
                        {
                            label: `orange`,
                            description: `Your fav colour is orange.`,
                            value: `orange`
                        },
                    ])
            );

            await interaction.reply({ content: `What is your fav colour? `, components: [row] });
	},
};