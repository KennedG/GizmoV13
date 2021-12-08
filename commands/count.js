//Por: HilckiasMarq#1738
const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "count",
    description: "Veja quantos membros seu servidor tem.",
    type: 'CHAT_INPUT',
  
    run: async (client, interaction, args) => {
     let user = interaction.member;
      
     let Cont = interaction.guild.memberCount;
      
      const EMBED = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle("🔟 | Count")
      .setDescription(`Atualmente seu servidor tem: __**${Cont}**__ Membros!`)
        interaction.followUp({content: `${user}`, embeds: [EMBED]});
    },
}; 
//Por: HilckiasMarq#1738