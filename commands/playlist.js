const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos!"),

    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/37i9dQZF1DX03VbhoH7arm?si=c5d61feb2a7a45ea")
    }
}