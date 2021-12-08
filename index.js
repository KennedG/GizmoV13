const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const express = require('express');
const db = require ('quick.db');
const config = require("./config.json"); 

client.login(config.token); 

client.once('ready', async () => {

    console.log("✅ - Estou online!")

})


const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online



client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }

client.on("messageCreate", async (message) => {

    let prefix = config.prefix;
  
      if (message.author.bot) return;
      if (message.channel.type == 'dm') return;     
  
       if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    
      if(message.author.bot) return;
      if(message.channel.type === 'dm') return;
  
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
      let cmd = args.shift().toLowerCase()
      if(cmd.length === 0) return;

      if(!command) command = client.commands.get(client.aliases.get(cmd)) 
    
  try {

    let black = db.get(`blacklist_${message.author.id}`);

    if (black === "sim") {
        
        message.reply(`:x: ${message.author} Você está em minha blacklist!`).then(msg => {

        setTimeout( () => {
            msg.delete().catch(err=>{})
        }, 5000);

    })

}
    else

    if (black === "nao" || !black || black === null || black === false) {
    

      command.run(client, message, args)

    }

  } catch (err) { 
 
     console.error('Erro:' + err); 
  }
      });

   process.on('unhandledRejection', (reason, p) => {
        console.log(' [ ANTICLASH ] | SCRIPT REJEITADO');
        console.log(reason, p);
    });
    process.on("uncaughtException", (err, origin) => {
        console.log(' [ ANTICLASH] | CATCH ERROR');
        console.log(err, origin);
    }) 
    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(' [ ANTICLASH ] | BLOQUEADO');
        console.log(err, origin);
    });
    process.on('multipleResolves', (type, promise, reason) => {
        console.log(' [ ANTICLASH ] | VÁRIOS ERROS');
        console.log(type, promise, reason);
    });


});