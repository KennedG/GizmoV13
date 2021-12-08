//Creditos: Pedro.#1760
//Creditos: Pedro.#1760
const Discord = require("discord.js")


module.exports =  {
name: "addcargo",
description: "addcargo em algum usuario",
type: "CHAT_INPUT",
options: [
       {
        name: "user",
        type: "USER",
        description: "seleciona o membro que deseja adicionar o cargo.",
        required: true
        
        },
   
    {
        name: "cargo",
        type: "ROLE",
        description: "seleciona o cargo que deseja setar.",
        required: true
        
        },
       

],
     


run: async (client, interaction, args) => {

    let member = interaction.options.getUser("user");
    if (!interaction.member.permissions.has('MANAGE_ROLES')) return  interaction.followUp({content: "Você não tem perm."})

    let role = interaction.options.getRole("cargo");

     const pedroaddcargo = new Discord.MessageEmbed()
     
     .setTitle("<:az_moderador_old:909264644168900629>  | Gerenciamento de Cargos")
     .addField(`👤 Usuario Mencionado`, `${member}`)
     .addField(`👉 Cargo Adicionado`, `${role}`)
     .setFooter("", client.user.avatarURL())
     .setColor("RANDOM")

     await interaction.guild.members.cache.get(member.id).roles.add(role);
   
     interaction.followUp({ embeds: [pedroaddcargo] }); 


}}
//Creditos: Pedro.#1760
//Creditos: Pedro.#1760