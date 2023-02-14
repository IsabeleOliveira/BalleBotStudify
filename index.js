const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

//dotenv
const dotenv = require('dotenv');
dotenv.config();
const {TOKEN} = process.env;

//importação dos comandos
const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file=>file.endsWith(".js"));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const commands = require(filePath)
    if ("data" in commands && "execute" in commands){
        client.commands.set(commands.data.name, commands)
    }else{
        client.login(`Esse comando em ${filePath} não tem data ou execute`);
    }
}

// login do bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}`);
});
client.login(TOKEN);

//Listener de interações com o bot
client.on(Events.InteractionCreate, async interaction => {
    if(interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        if(selected === "javaScript"){
            await interaction.reply("Documentação do Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript")
        }else if(selected == "python"){
            await interaction.reply("Documentação do Python: https://developer.mozilla.org/pt-BR/docs/Glossary/Python")
        }else if(selected == "Java"){
            await interaction.reply("Documentação do Java: https://developer.mozilla.org/pt-BR/docs/Glossary/Java")
        }else if(selected == "HTML"){
            await interaction.reply("Documentação do HTML: https://developer.mozilla.org/pt-BR/docs/Web/HTML")
        }
    }
    if(interaction.isChatInputCommand()){
        const command = interaction.client.commands.get(interaction.commandName)
        if (!command){
            console.error("Esse comando não existe")
            return
        }
        try{
            await command.execute(interaction)
        }
        catch(error){
            console.error(error)
            await interaction.reply({content: "Ocorreu um erro ao executar esse comando", ephemeral: true})
        }
    }
    
})