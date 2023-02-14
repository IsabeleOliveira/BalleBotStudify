const {SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component} = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Selecione uma tecnologia")
            .addOptions({
                label: "javaScript",
                description: "Veja a documentação do JavaScript",
                value: "javaScript",
            },
            {
                label: "Java",
                description: "Veja a documentação do Java",
                value: "Java",
            },
            {
                label: "python",
                description: "Veja a documentação do Ptyhon",
                value: "python",
            },
            {
                label: "HTML",
                description: "Veja a documentação do HTML",
                value: "HTML",
            }           
        )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que você quiser"),
        
    async execute(interaction){
        await interaction.reply({content: "Selecione uma das tecnologias abaixo", components: [row]})
    }
}