//Creditos: Pedro.#1760
//Creditos: Pedro.#1760
const Discord = require("discord.js")


module.exports =  {
name: "removercargo",
description: "remover cargo de algum usuario",
type: "CHAT_INPUT",
options: [
       {
        name: "user",
        type: "USER",
        description: "seleciona o membro que deseja remover o cargo.",
        required: true
        
        },
   
    {
        name: "cargo",
        type: "ROLE",
        description: "seleciona o cargo que deseja remover.",
        required: true
        
        },
       

],
     


run: async (client, interaction, args) => {

    let member = interaction.options.getUser("user");
    if (!interaction.member.permissions.has('MANAGE_ROLES')) return  interaction.followUp({content: "Você não tem perm."})

    let role = interaction.options.getRole("cargo");

     const pedroremovercargo = new Discord.MessageEmbed()
     
     .setTitle("<:az_moderador_old:909264644168900629>| Gerenciamento de Cargos")
     .addField(`👤 Usuario Mencionado`, `${member}`)
     .addField(`👉 Cargo Retirado`, `${role}`)
     .setFooter("", client.user.avatarURL())
     .setColor("RANDOM")

     await interaction.guild.members.cache.get(member.id).roles.remove(role);
   
     interaction.followUp({ embeds: [pedroremovercargo] }); 


}}
//Creditos: Pedro.#1760
//Creditos: Pedro.#1760