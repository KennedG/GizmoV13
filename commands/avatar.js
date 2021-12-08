const Discord = require("discord.js"); 

module.exports = {
    name: 'avatar',
    description: 'Ver o avatar de alguém',
    type: 'CHAT_INPUT',
    options:[
        {
            name:'membro',
            description:'marque alguém para ver seu avatar',
            type:6,
            required:false,
        },
    ],
    run: async (client, interaction, args) =>{
  
  const user = interaction.options.getUser('membro') || interaction.member.user
      
const sicon = user.avatarURL({ dynamic: true, format: "png", size: 1024 })
  
  const embed = new Discord.MessageEmbed() 
    .setColor(`#a5d7ff`) 
    .setTitle(user.tag) 
    .setDescription(`[Link da imagem](${sicon})`)
    .setImage(sicon) 
    

    await interaction.followUp({embeds: [embed]});
}
}