const Discord = require('discord.js')
const canvacord = require("canvacord")

exports.run = async(client, message, args) => {
  
    let user

    try {
       user = client.users.cache.get(args[0]) || message.mentions.users.first() || await is.client.users.fetch(args[0]) 
    } catch {
       user = message.author 
    }

    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });

    let image = await canvacord.Canvas.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    return message.reply({ files: [attachment] });

  }