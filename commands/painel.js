const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Poing = require('discord-mongo-currency')

module.exports = {
    name: 'painel',
    aliases: ["adm"],
    description: 'abra o painel de adm',

    run: async(client, message, args) => {

      
     try{

        const servidor = '644991505873895434'

        const user = message.mentions.users.first();

        const dono = '493282797222494230'
  
        const row = new Discord.MessageActionRow();
    
        const yesButton = new Discord.MessageButton()
          .setCustomId("yes")
          .setLabel("BAN")
          .setStyle("DANGER")
          .setEmoji('<:admin:894788668168994857>')
          .setDisabled(false);
    
        const noButton = new Discord.MessageButton()
          .setCustomId("no")
          .setLabel("KICK")
          .setEmoji('<:kick:894788547243036683>')
          .setStyle("DANGER")
          .setDisabled(false);

        const maisButton = new Discord.MessageButton()
        .setCustomId("mais")
        .setLabel("MONEY")
        .setEmoji('<:mais:894791986815574047>')
        .setStyle("DANGER")
        .setDisabled(false);

        const menosButton = new Discord.MessageButton()
        .setCustomId("menos")
        .setLabel("MONEY")
        .setEmoji('<:menos:894792016754511872>')
        .setStyle("DANGER")
        .setDisabled(false);

        const maissButton = new Discord.MessageButton()
        .setCustomId("mais")
        .setLabel("MONEY")
        .setEmoji('<:mais:894791986815574047>')
        .setStyle("DANGER")
        .setDisabled(true);

        const menossButton = new Discord.MessageButton()
        .setCustomId("menos")
        .setLabel("MONEY")
        .setEmoji('<:menos:894792016754511872>')
        .setStyle("DANGER")
        .setDisabled(true);
    
        if(message.author.id === dono) {
            row.addComponents([yesButton, noButton, maisButton,menosButton]);
        } else {
            row.addComponents([yesButton, noButton, maissButton,menossButton]);
        }

        const target = Poing.findUser(user.id, servidor)

        const embd = new Discord.MessageEmbed()
        .setTitle('Painel ADM')
        .setDescription(`Escolha uma opção!`)
        .setColor('RED')

        const msg = await message.reply({
          content: ` `,
          components: [row],
          embeds: [embd]
        }).then(msg => setTimeout(() => { msg.delete() }, 15000))
    
        let collect;
    
        const filter = (interaction) => {
          return interaction.isButton() && interaction.message.id === msg.id;
        };
    
        const collector = msg.createMessageComponentCollector({
          filter: filter,
          time: 60000,
        });
    
        collector.on("collect", async (x) => {
          if (x.user.id != message.author.id)
            return x.reply({
              content: `Ops , parece que não foi você que executou esse comando.`,
              ephemeral: true,
            });
    
          collect = x;
    
          switch (x.customId) {
            case "yes": {
              msg.delete();
              break;
            }
    
            case "no": {
              msg.delete();
              break;
            }

            case "mais": {
                Poing.giveCoins(user.id, servidor, 2000);
                x.reply({ content: `Enviado 2000 moedas para <@${user.id}>`, ephemeral: true })
                break;
            }

            case "menos": {
                if(target.coinsInWallet < 2000) {
                    x.reply({ content: `vish, o usuário não tem dinheira suficiente pra retirar...`, ephemeral: true})
                } else {
                    Poing.deductCoins(user.id, servidor, 2000);
                    x.reply({ content: `Retirado 2000 moedas de <@${user.id}>`, ephemeral: true })
                }
                break;
            }
          }
        });
    
        collector.on("end", (x) => {
          if (collect) return;
        });

     } catch(err) {
         message.reply('Cade minha permissão de apagar mensagens ?')
     }
    }
}