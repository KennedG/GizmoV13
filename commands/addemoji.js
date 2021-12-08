const mongoose = require('mongoose')
const Guild = require('../../database/Schemas/Guild')
const Discord = require('discord.js')

module.exports = {
    name: 'addemoji',
    category: "Admin",
    aliases: ["adicionaremoji", "novoemoji"],
    description: 'adicione emojis em seu servidor!',
    cooldown: 3,
    permissions: ['MANAGE_EMOJIS_AND_STICKERS'],

    run: async(client, message, args) => {
        try{
            if(!args[0]) {
                message.reply(`Você precisa colocar um emoji junto! , exemplo: addemoji :admin:`)
            } else {
                try{
                    for(const emojis of args) {
                        const getEmoji = Discord.Util.parseEmoji(emojis);
          
                        if(getEmoji.id) {
                            const emojiExt = getEmoji.animated ? '.gif' : '.png';
                            const emojiURL = `https://cdn.discordapp.com/emojis/${getEmoji.id + emojiExt}`;
                            try{
                              message.guild.emojis.create(emojiURL, getEmoji.name).then((emoji) => message.reply(`${emoji} | Emoji adicionado com sucesso!`))
                            } catch(err) {
                                message.reply('Desculpe, mas eu não consegui adicionar este emoji!\nTalvez o nome do emoji seja muito grande,\nTalvez eu não esteja com a permissão necessária.')
                            }
                        }
                      }
                } catch(err) {
                    message.reply('Desculpe, mas eu não consegui adicionar este emoji!\nTalvez o nome do emoji seja muito grande,\nTalvez eu não esteja com a permissão necessária.')
                }
            }
            
        } catch(err) {
            console.log(err)
            message.reply(`😒 | ${message.author}, Desculpa não consegui setar nenhum canal.`)
        }
        }
    }