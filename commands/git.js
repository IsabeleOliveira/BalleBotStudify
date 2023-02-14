const {SlashCommandBuilder, EmbedBuilder } = require("discord.js")

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle('Comandos do GIT')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
        { name: '$ git init', value: 'inicializa o git no diretório', inline: true },
		{ name: '$ git push', value: 'Envia todos os commits do branch local para o GitHub', inline: true },
		{ name: '$ git commit -m', value: 'Grava o snapshot permanentemente do arquivo no histórico de versão', inline: true },
	)



module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do GIT"),

    async execute(interaction){
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}