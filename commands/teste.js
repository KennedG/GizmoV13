 const Discord = require("discord.js");
const moment = require("moment")
    moment.locale("pt-BR")

module.exports = {
  name: 'serverinfo',
  run: async (client, message, args) => {

    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let cargos = message.guild.roles.map(a => a).join(", ");
    let totalmembros = message.guild.memberCount;
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Informações do servidor**")
    .setColor(B)
    .setThumbnail(sicon)
    .addField("📡 » Nome do servidor:", message.guild.name)
    .addField("💻 » ID do servidor:", message.guild.id)
    .addField('👑 » Dono do servidor:', message.guild.owner)
    .addField('🌎 » Região do servidor:', message.guild.region)
    .addField('🕙 » Criado em:', moment(message.guild.createdAt).format('LLLL'))
    .addField(':desktop: » Shard ID', aruna.shard.id, true)
    .addField(`👥 » Membros: [${totalmembros}]`, `:online: Online: ${online}\n:ausente: Ausente: ${ausente}\n:ocupado: Ocupado: ${ocupado}\n:offline: Offline: ${offline} `)
    .addField(`📋 » Canais: [${canaistexto+canaisvoz}]`, ` :pencil: Texto: ${canaistexto}\n:speaking_head: Voz: ${canaisvoz}`)
    .addField(`:page_facing_up: » Cargos`,`Total: [${message.guild.roles.size}]`)
    .addField(` Informações sobre Impulsos`, `:impulsionar: » Nível do Impulso: ${message.guild.premiumTier}\n:impulsionar: » Quantidade de Impulsos: ${message.guild.premiumSubscriptionCount}`)
    .addField(`😋 » Emojis:`,`Total: [${message.guild.emojis.size}]`)
    .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
    message.channel.send(serverembed);
  }
} 