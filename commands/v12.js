const Discord = require("discord.js");

module.exports = {
  name: "embedbydark",
  description: "By dark",
  author: "by dark",
  run: async(message) => {

    const dark_embed = new Discord.MessageEmbed()
    .setAuthor("➣ Autor da mensagem") //Autor do embed
    .setTitle("➣ Titulo da mensagem") //Titulo do embed
    .setDescription("➣ Descrição da mensagem") //descrição do embed
    .setImage("https://cdn.discordapp.com/attachments/887011049503596585/888187502685470731/standard_1.gif") //link da imagem no lugar do texto!
    .setThumbnail("https://cdn.discordapp.com/attachments/887011049503596585/888187502685470731/standard_1.gif") //link da imagem!
    .setFooter("➣ Final da mensagem") //final da mensagem!
    .addField("➣ Nome do field", "➣ Descrição do field", true)//se esta em linha ou não, (false para não e true para sim)
    .setTimestamp() //Não coloque nada aqui :D
    .setColor("RED") //coloque uma cor hex aqui! apenas hex

    message.channel.send({ embeds: [dark_embed] })
  }}