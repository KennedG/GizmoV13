const {
    MessageEmbed,
    Message
} = require("discord.js");
const Discord = require('discord.js')
let cpuStat = require("cpu-stat");
let os = require("os");

module.exports = {
    name: "botinfo",
    description: "[ ❓ INFO ] - Me conheça melhor!", 
    cooldown: 3,
    options: [
    ],
    
    run: async (client, interaction) => {
            let btnNaoexisto = new Discord.MessageButton().setStyle('LINK').setLabel('Sobremim').setURL('https://sites.google.com/view/botgizmo')
            const row = new Discord.MessageActionRow().addComponents([btnNaoexisto]);

            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({dynamic: false}))
            .setDescription(`Olá, eu sou o ${client.user.username}!\n_ _`)
            .setColor('YELLOW')
            .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
            .addFields(
                {
                    name: '<a:verificado:908562051927007242>  **__Quem sou eu:__**',
                    value: `\`${client.user.username}\``,
                    inline: false
                },
                {
                    name: '<:yes:911046834678538260> **__Discord.js:__**',
                    value: `\`${Discord.version}\``,
                    inline: false
                },
                {
                    name: '<:b_planilha_old:910473890835349515>  **__Memória:__**',
                    value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``,
                    inline: false
                },
                {
                    name: '<:yes:911046834678538260>  **__Node:__**',
                    value: `\`${process.version}\``
                },
                {
                    name: '<a:ping:909996412660502608>  **__Meu ping:__**',
                    value: `\`${client.ws.ping}ms\``,
                    inline: false
                },
            )

            interaction.reply({ content: '', embeds: [embed], components: [row]})

    }
}