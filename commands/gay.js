//==============comando normal:===============
const Discord = require("discord.js");
const Canvas = require("canvas")

module.exports = {
    name: "gaytest",
    aliases: ["gay"],

    run: async (client, message, args) => {

const canvas = Canvas.createCanvas( 1000, 1000)
    const ctx = canvas.getContext("2d")

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

let porcentagem = Math.floor(Math.random() * 100);
      
if (user.bot)return message.reply(`Da onde já se viu bot ter perfil kkakakakakakk`)

const avatar = await   Canvas.loadImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height)

if(porcentagem < 30)  {
const layout = await   Canvas.loadImage("https://i.imgur.com/5ajxIva.png")
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)
}      
if(porcentagem > 30)  {
const layout = await   Canvas.loadImage("https://i.imgur.com/5Icj4qU.png")
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)
}
if(porcentagem > 60)  {
const layout = await   Canvas.loadImage("https://i.imgur.com/mRJ6W0D.png")
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)
      }
      
ctx.font = '100px FONT_SANS_32_BLACK';
ctx.fillText(`${porcentagem}%`, 40, 900)

      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'gay.png')

        return message.channel.send({content: `${message.author}`, files: [attachment]})
        
      
    }
}