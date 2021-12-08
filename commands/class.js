const {
    MessageEmbed
} = require("discord.js");
const Discord = require("discord.js");
const Canvas = require('canvas')


module.exports = {
    name: "classificar",
    category: "user",
    usage: "<idum> <iddois> <idtres> <#channel>",
    aliases: ["cf"],
    cooldown: 5,
    description: "feito por nãoexisto comedor de casadas", 
    run: async (client, message, args) => {
                const channel = message.mentions.channels.first()
                let user = client.users.cache.get(args[0]) || message.author;
                let target = client.users.cache.get(args[1]) || message.author;
                let nadaver = client.users.cache.get(args[2]) || message.author;

                if(!channel) {
                    return message.reply('<a:cuspir:898813920062623825> Mencione o canal primeiro!')
                } else {
                    
                const canvas = Canvas.createCanvas(730, 346)
                const ctx = canvas.getContext("2d")
                
                let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

                const TargetAvatar = await Canvas.loadImage(`${avatar}`)
                ctx.drawImage(TargetAvatar, 50, 132, 150, 150)

                let avatartarge = target.avatarURL({ dynamic: true, format: "png", size: 1024 });

                const TargetFAvatar = await Canvas.loadImage(`${avatartarge}`)
                ctx.drawImage(TargetFAvatar, 515, 132, 150, 150)

                let avatartargeG = nadaver.avatarURL({ dynamic: true, format: "png", size: 1024 });

                const TargetFAvatarG = await Canvas.loadImage(`${avatartargeG}`)
                ctx.drawImage(TargetFAvatarG, 285, 132, 150, 150)
                
                let layout = await 
                Canvas.loadImage("https://cdn.discordapp.com/attachments/862566063090171995/905713819383373865/classificacao.png")
                ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)
          
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `classificar_${message.author.id}_.png`)
                channel.send({ content: `<a:cuspir:898813920062623825> **__Ganhadores:__**\n\`#1\` - ${user}\n\`#2\` - ${target}\n\`#3\` - ${nadaver}`, files: [attachment] })
                message.reply(`<a:verificado:859296534813737001> Classificação enviada para o canal: ${channel}!`)
                }
                

    }
}