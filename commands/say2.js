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
			.setImage('https://cdn.discordapp.com/attachments/645036363196137472/904766109994074142/9LkbhF7.gif')
      .setColor("RED");

    message.channel.send({ embeds: [embed] });
    message.delete();
  },
};// feito por NED#6325