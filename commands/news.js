const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const invite = new Discord.MessageEmbed()
  .setAuthor(`NEWS`, client.user.displayAvatarURL())
  .setDescription(`**<a:verificado:859296534813737001>  Olá ${message.author.username} essa são minhas novidades!**
<a:carregando:861996919877271552> **Novos staffs disponíveis para a comunidade!**
<a:carregando:861996919877271552> ** Mais de 3K de usuários me utilizando!**
<a:carregando:861996919877271552> Formulário para staff disponível! [Formulário](https://forms.gle/qvxGfetHhNJKLYuz7)`)
  .setColor("BLUE")
  message.channel.send(invite)
}