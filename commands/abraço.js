const Discord = require('discord.js')
const superagent = require("superagent");
const config = require("../../config.json")
const creditos = require("../../CREDITS.json")

module.exports = {
   name: "abraçar",
description: "abraçe membros",
type: "CHAT_INPUT",
options: [
{
name: "user",
type: "USER",
description: "Qual user deseja abraçar?",
required: true

},

],
run: async(bot, interaction, args ) => {

   const { body } = await superagent.get('https://nekos.life/api/v2/img/hug')

   let user = interaction.options.getUser("user");
   


if(user.id == interaction.user.id) return interaction.followUp({content: "Que? Como vai se abraçar???"})


const embed = new Discord.MessageEmbed()
.setDescription(`<@${interaction.user.id}> abraçou <@${user.id}>`)
.setImage(body.url)
.setColor(config.embed)
.setFooter("By: Pani Kaz#8893 ")
await interaction.followUp({embeds: [embed]})


}
}