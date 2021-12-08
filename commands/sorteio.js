//Packages que serão utilizadas: discord.js e ms
const { MessageEmbed } = require("discord.js"); 
const ms = require("ms"); //Esta package serve para determinação de tempo (como o tempo do sorteio)

module.exports = {
 name: "sortear",
 timeout: 10000,
 aliases: [],
 run: async (bot, message, args) => {
 
 message.delete().catch(() => null);
 //Argumento do tempo
 if (!args[0]) return message.channel.send(`Você não específicou tempo!`);
 
 if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m") && !args[0].endsWith("s")) return message.channel.send(
 `Defina o tempo em minutos \`(m)\`, horas \`(h)\` ou dias \`(d)\`.`
 );
 
 if (isNaN(args[0][0])) return message.channel.send(`Isto não é um número!`);
 
 let channel = message.mentions.channels.first();
 
 if (!channel) return message.channel.send(
 `Você precisa marcar o canal para o sorteio!`
 );
 
 let prize = args.slice(2).join(" ");
 
 if (!prize) return message.channel.send(`Você precisa falar o prêmio!`);
 //O que o bot vai lhe responder quando o sorteio for criado
 message.channel.send(`*Sorteio criado em ${channel}*`);
 //Embed do sorteio que será mandada no canal escolhido
 let Embed = new MessageEmbed()
 .setTitle(`🎁 ${prize}`)
 .setDescription(
 `O usuário ${message.author} iniciou um sorteio
 Clique em 🎉 para participar!`
 )
 .setTimestamp(Date.now() + ms(args[0]))
 .setColor("#707adc"); //Cor da embed, caso não saiba as cores em HEX, acesse: https://www.homehost.com.br/blog/tutoriais/tabela-de-cores-html/
 
 let m = await channel.send(Embed);
 //Qual reação ele irá adicionar para participar do sorteio (se for alterar isso, altere tudo que tinha a reação anterior para adicionar a nova)
 m.react("🎉");
 
 setTimeout(() => {
 if (m.reactions.cache.get("🎉").count <= 1) {
 message.channel.send(`Reações: ${m.reactions.cache.get("🎉").count}`); //Vai mostrar quantas reações tinha quando o sorteio foi finalizado
 return message.channel.send(``);
 }

 let ganhador = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random(); 
 channel.send(`Parabéns ${ganhador} por ganhar o sorteio **${prize}**!`); //Divulga o ganhador
 
 }, ms(args[0]));
 },
};
