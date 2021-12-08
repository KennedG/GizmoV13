const Discord = module.require("discord.js");
// feito por NED#6325
module.exports = {
  name: "say",
  author: "Ned",
  description: "Enviar mensagens ",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    let msg = args.join(" ");
    if (!msg) {
      return message.channel.send("Insira algum texto");
    }
    const embed = new Discord.MessageEmbed()
   
      .setDescription(`${msg}`)
			.setImage('https://media.discordapp.net/attachments/911040433545699400/911045789680287764/20211117_102409.gif')
      .setColor("RED");

   message.channel.send(`||@everyone|| `,embed)
    message.channel.send({ embeds: [embed] });
    message.delete();
  },
};// feito por NED#6325