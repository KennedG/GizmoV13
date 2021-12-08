const Discord = require('discord.js')
const superagent = require("superagent");
const config = require("../../config.json")

module.exports = {
   name: "tapa",
description: "de um tapa em um membro",
type: "CHAT_INPUT",
options: [
{
name: "user",
type: "USER",
description: "Qual user deseja dar um tapa?",
required: true

},

],
run: async(bot, interaction, args ) => {

   const { body } = await superagent.get('https://nekos.life/api/v2/img/slap')

   let user = interaction.options.getUser("user");
   


if(user.id == interaction.user.id) return interaction.followUp({content: "Que? Como vai se bater???"})



   const embed = new Discord.MessageEmbed()
      .setDescription(`<@${interaction.user.id}> bateu em <@${user.id}>`)
      .setImage(body.url)
      .setColor(config.embed)
      .setFooter(`Comando por ${interaction.user.username}`)
      await interaction.followUp({embeds: [embed]})
 
}
}