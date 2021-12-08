const Discord = require ("discord.js")

module.exports = {
    name: "embed full by ferinha <3",
    description: "o bot vai enviar uma embed full + menção",
    author: "ferinha :))",

    run: async(client, message, args) => {

        let fera = message.author;

        let ferinha = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic:true}) /*url de alguma coisa*/)
        .setTitle(`<a:verificado:861997059955228723>Informações<a:verificado:861997059955228723>`)
        .setDescription(`** 

        > <a:boost:897136917466984470>| Me Adicione clicando [Me adicione](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)
        > <:badgePartner:909263598788968478> | Entre no meu suporte clicando  [Suporte](https://discord.gg/Vk8sEtb4n5)
        > <a:sintonia_emoji239:909266143204741181> | Acesse meu website  [Site](https://sites.google.com/view/botgizmo)
        > <:badgePartner:909263598788968478>| Mais informações apenas marque <@814726444377833532>
        
        > <a:verificado:859296534813737001>| Estou em ${client.guilds.cache.size} Servidores!
        > <:branco_pessoaRDM:908562579117453342>|Estou cuidando de ${client.users.cache.size} Pessoas lindas!
        
        > <a:coroa:898814229640019968> | Meu criador: <a:Desenvolvedor:861997097598844929> <@493282797222494230>
        > <a:hype:897139138661351434> | Ajudante: <a:Desenvolvedor:861997097598844929>  <@755857419963465789>
         
        > <a:Redinsta_TDA:909271172900880385> **Redes socias**
        > <a:Redinsta_TDA:909271172900880385> Instagram Gizmo [Instagram do Gizmo](https://www.instagram.com/botgizmo/)
        > <a:Redinsta_TDA:909271172900880385> Instagram do criador [Instagram do Kenned](https://www.instagram.com/guilhermekenned_/)
        
        > <:youtube_OFera:909308138543521833> Canal do Youtube| [Youtube](https://www.youtube.com/channel/UCPWNtkJPKdJJZi0dEDWNWMw)
        > <:twitch:909308852724441109> Twitch |[Twitch](https://www.twitch.tv/kennedg)
        > <a:discord:897139171649552455> Discord | [Discord](https://discord.gg/wRf8gtKC4P)
        
        > <a:emoji_82:905018142139490315> |Utilize ${config.prefix}help ou ajuda para a lista de comandos
        > <a:fixado:842875725467746336> |${client.channels.cache.size} canais!
        > <a:verificado:859296534813737001>| Estou em ${client.guilds.cache.size} Servidores!
        > <:branco_pessoaRDM:908562579117453342>|Estou cuidando de ${client.users.cache.size} Pessoas lindas!
        
        
          
          **`)
        .setFooter(`Informações do Gizmo`)
        .setColor("RANDOM")
        .setImage("https://i.imgur.com/PFJbjNB.gif") //url de alguma imagem (imagem grande em baixo)
        .setThumbnail("message.author.displayAvatarURL()") //url de alguma imagem (na direita | parte de cima)
 
        

        message.channel.send(embed)
  
    }
}