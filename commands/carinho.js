
const config = require("../../config.json")

module.exports = {
   name: "carinho",
description: "faça carinho em membros",
type: "CHAT_INPUT",
options: [
{
name: "user",
type: "USER",
description: "Qual user deseja fazer carinho?",
required: true

},

],
run: async(bot, interaction, args ) => {

   const { body } = await superagent.get('https://nekos.life/api/v2/img/pat')

   let user = interaction.options.getUser("user");
   


if(user.id == interaction.user.id) return interaction.followUp({content: "Que? Como vai fazer carinho em você mesmo???"})



   const embed = new Discord.MessageEmbed()
      .setDescription(`<@${interaction.user.id}> fez carinho em <@${user.id}>`)
      .setImage(body.url)
      .setColor(config.embed)
      .setFooter("By: Pani Kaz#8893 ")
      await interaction.followUp({embeds: [embed]})
 
}
}