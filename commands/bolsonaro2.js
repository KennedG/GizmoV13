const {
    MessageEmbed
} = require("discord.js");
const Discord = require("discord.js");
const Canvas = require('canvas')


const { registerFont } = require('canvas')

module.exports = {
    name: "bolsonaro",
    usage: "(link) , (menção) ou (escrita)",
    aliases: ["bolsominion"],
    cooldown: 5,
    description: "Brinque com o bolsonaro",

    run: async (client, message, args) => {
        try {
            try{
                let user = message.mentions.users.first()
                let target;
                if(!user) {
                    target = 'https://cdn.discordapp.com/attachments/885942897797652480/906255820839342181/unknown.png'
                } else {
                    target = user;
                }
    

                if(target === user) {
                const canvas = Canvas.createCanvas(1667, 958)
                const ctx = canvas.getContext("2d")
    
                
                let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

                const TargetAvatar = await Canvas.loadImage(`${avatar}`)
                ctx.drawImage(TargetAvatar, 455, 1, 1200, 1200)
                
                let layout = await 
                Canvas.loadImage("https://cdn.discordapp.com/attachments/885942897797652480/906254799182381156/bolsonaro.png")
                ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)

                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `bolsonaro_${message.author.id}_.png`)
                return message.reply({ content: ` `, files: [attachment] })
                } else {
                    if(verificar(args[0])) {
                    const canvas = Canvas.createCanvas(1667, 958)
                    const ctx = canvas.getContext("2d")
        
                    
                    let avatar = args[0]
    
                    const TargetAvatar = await Canvas.loadImage(`${avatar}`)
                    ctx.drawImage(TargetAvatar, 455, 1, 1200, 1200)
                    
                    let layout = await 
                    Canvas.loadImage("https://cdn.discordapp.com/attachments/885942897797652480/906254799182381156/bolsonaro.png")
                    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)
    
                    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `bolsonaro_${message.author.id}_.png`)
                    return message.reply({ content: ` `, files: [attachment] })
                    } else {
                    const canvas = Canvas.createCanvas(1667, 958)
                    const ctx = canvas.getContext("2d")
                    
                    let layout = await 
                    Canvas.loadImage("https://cdn.discordapp.com/attachments/885942897797652480/906263068919599104/bolsonaro_461346834342739978_.png")
                    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)

                    ctx.font = `90px "Segoe UI Black"`;
                    ctx.fillStyle = '#000000';
                    ctx.fillText(shorten(`${args.join(" ")}`, 22), 500, 400)
    
                    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `bolsonaro_${message.author.id}_.png`)
                    return message.reply({ content: ` `, files: [attachment] })
                    }
                }
                
            } catch (err) {
                console.log(err)
                message.reply('Erro ao tentar shipar usuários...')
            }
        } catch (e) {
            console.log(String(e.stack).bgRed)
        }
    }
}

function shorten(text, len) {
    if (typeof text !== "string") return "";
    if (text.length <= len) return text;
    return text.substr(0, len).trim() + "\n";
  }


  function verificar(string) {
    let link = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  
    if (link.test(string)) return true;
    return false;
  }
  
  
  /*
  * Caso queira testar acesse: https://discord.gg/ZsDuxFnqyA
  *
  */