const canvacard = require("canvacard");
const {
    MessageEmbed
  } = require("discord.js");
  
const Discord = require("discord.js");

  module.exports = {
    name: "rank",
    cooldown: 5,
    description: "[ 🎉 DIVERSÃO ] - Veja seu rank atual!",
    memberpermissions: [],
    requiredroles: [],
    alloweduserids: [], 
    options: [
        {
            "User": {
              name: "user",
              description: "Escolha um usuário para você hackear.",
              required: false,
            }
          },
    ],
    run: async (client, interaction) => {
        const user = interaction.options.getUser("user") || interaction.user;

      try {

        let background = 'https://th.bing.com/th/id/R.27003ce3913f8e93ce1840b128670fa9?rik=Q0hFJy7oBa%2fBBg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fHD-Gamer-Wallpaper.jpg&ehk=0wqyGQAl43KSC%2bu%2bL0wcipZFduMN%2f4FQkp7g%2fINoPgE%3d&risl=&pid=ImgRaw&r=0'
        let avatar = user.avatarURL({ dynamic: false, format: "png", size: 1024 })

        const rank = new canvacard.Rank()
        .setAvatar(avatar)
        .setBackground('IMAGE', background)
        .setCurrentXP(1)
        .setRequiredXP(1)
        .setRank(1)
        .setRankColor("#FFFFFF")
        .setLevel(1)
        .setLevelColor("#FFFFFF")
        .setStatus("online", true)
        .setCustomStatusColor("#eb00c7")
        .setOverlay("#23272A", 1 || 0, true)
        .setProgressBar(["#FF0000", "#0000FF"], "GRADIENT")
        .setProgressBarTrack("#000000")
        .setUsername(user.username)
        .setDiscriminator(user.discriminator)
        .renderEmojis(true)

        rank.build()
    .then(data => {

        const attachment = new Discord.MessageAttachment(data, `RankCard_${user.id}.png`);
        interaction.reply({ content: ' ', files: [attachment]});
    });

      } catch (e) {
        console.log(String(e.stack).bgRed)
      }
    }
  }