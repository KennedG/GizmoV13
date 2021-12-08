const Discord = require('discord.js')
const { DiscordTogether } = require('discord-together');

module.exports = {
    name: 'youtube',
    aliases: [],
    description: 'Veja videos com seus amigos!',
    cooldown: 3,

    run: async(client, message, args) => {
        try{
            if(message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                    return message.reply(`${invite.code}`);
                });
            } else {
                message.reply({ content: 'Você precisa entrar em um canal de voz primeiro!', ephemeral: true})
            }
        } catch(err) {
            console.log(err)
            message.reply(`😒 | ${message.author}, Desculpa não consegui setar nenhum canal.`)
        }
        }
    }