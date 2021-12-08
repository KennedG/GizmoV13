//==============Comando em SlashCommands===========
const Discord = require("discord.js");
const Canvas = require("canvas")
module.exports = {
    name: 'gay',
    description: 'ver o quanto alguem é gay ',
    type: 'CHAT_INPUT',
    options:[
        {
            name:'usuario',
            description:'marque alguém casa você quiser',
            type:6,
            required:false,
        },
    ],
    run: async (client, interaction, args) =>{
            const user = interaction.options.getUser('usuario') || interaction.member.user

const canvas = Canvas.createCanvas( 1000, 1000)
    const ctx = canvas.getContext("2d")

let porcentagem = Math.floor(Math.random() * 100);
      
if (user.bot)return interaction.reply(`Da onde já se viu bot ser gay menó kkakakakakakk`)

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
      
ctx.font = '100px Impact';
ctx.fillStyle = '#F8F8F8';
ctx.fillText(`${porcentagem}%`, 40, 900)

      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'gay.png')

        return interaction.reply({content: `${interaction.member}`, files: [attachment]})

    }
}