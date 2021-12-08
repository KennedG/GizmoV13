const Discord = require("discord.js")
const db = require('quick.db');
const c = require('../../config.json');
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`setbg`)
    .setDescription(`[💰] » Apenas minha equipe pode utilizar`)
    .addUserOption(option => option.setName('user').setDescription('Usuario'))
    .addStringOption(option => option.setName('valor').setDescription('Valor')),
    async execute(client, interaction) {
    
        const err = new Discord.MessageEmbed()
        .setTitle("<:y_not:902294855802298458> ``|`` Voce não pode utilizar este comando!")
        .setDescription("<:errado:904141076745556020> Apenas minha equipe de desenvolvedor pode utilizar")
        .setColor(c.cor)

        if (![c.dono].includes(interaction.user.id)) {
        return interaction.reply({embeds: [err]})
        }
      
        const user = interaction.options.getUser('user') || interaction.user
        const valor = interaction.options.getString('valor')

        if(!user) return interaction.reply(`<:errado:904141076745556020> \`|\` **Coloque um usuario valido!**`) 
        if(!valor) return interaction.reply(`<:errado:904141076745556020> \`|\` **Coloque uma imagem valido!**`) 

        const embedadicionar = new Discord.MessageEmbed()
        .setDescription(`background [${valor}] alterado de ${user.tag}`)
        .setColor(c.cor)
    

        console.log(valor)
        interaction.reply({embeds: [embedadicionar]})
        db.set(`background_${user.id}`, valor)
    
    }
    }