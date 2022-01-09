# DiscordBotv13 

![](https://discord.com/assets/cb48d2a8d4991281d7a6a95d2f58195e.svg)

Nossa equipe estar desenvolvendo um bot da discórdia e resolveu compartilhar com vocês o nosso desenvolvimento, se você quer contribuir com nosso projeto exemplo algum script e etc basta nos enviar!

# O Que São Bots Do Discord?

![](https://psverso.com.br/wp-content/uploads/2021/08/discord-bots-768x432.png)

Os bots são “robôs” que ajudam no gerenciamento de canais no Discord e são muito úteis para adicionar funções que a plataforma não possui nativamente. Essas vão desde identificar spam, criar resposta automáticas automatizar tarefas diárias até mesmo colocar músicas para tocar em um canal

# instalação 

Primeiro, você precisa de um editor de código adequado,para começar a desenvolver seu projeto,baixe o que você ja estar mas acostumado usar e veja os próximos passos!


![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  

**O que é node js?**

Node.js é um ambiente de tempo de execução JavaScript de código aberto, multiplataforma e back-end que roda no mecanismo V8 e executa o código JavaScript fora de um navegador da web.

disscord.js v13 requer o Node v16.6.0 ou superior.

**Apos ter instalado o node js é so copiar o nosso repositório e começar a programar!**

```
git clone https://github.com/kettraworld/DiscordBotv13
```

**Agora você precisa instalar todas as dependências do nosso projeto que se encontra no "package.json" com o seguinte comando!**
```
npm install 
```
**agora coloque o seu token em ```config.json``` e ligue seu bot com o comando:**
```
node .
```

# Configurando um aplicativo do bot

Agora que instalou o Node, discord.js e com sorte o nosso repositório, você está quase pronto para começar a codificar! A próxima etapa que você precisa realizar é configurar um aplicativo de bot Discord real através do site do Discord.

É fácil criar um. As etapas que você precisa realizar são as seguintes:

1 • Abra o portal do desenvolvedor Discord e faça login em sua conta.

2 • Clique no botão "Novo aplicativo".

3 • Insira um nome e confirme a janela pop-up clicando no botão "Criar".

Você deverá ver uma página como esta:
![](https://discordjs.guide/assets/create-app.ed82aede.png)
Você pode editar o nome, a descrição e o avatar do seu aplicativo aqui. Depois de salvar suas alterações, prossiga selecionando a guia "Bot" no painel esquerdo.
![](https://discordjs.guide/assets/create-bot.44c7ea49.png)
Clique no botão "Adicionar Bot" à direita e confirme a janela pop-up clicando em "Sim, faça isso!". Parabéns, agora você é o orgulhoso proprietário de um bot Discord novinho em folha! Você não está totalmente pronto, no entanto.
![](https://discordjs.guide/assets/created-bot.b809fb6e.png)
Neste painel, você pode dar ao seu bot um avatar estiloso, definir seu nome de usuário e torná-lo público ou privado. Você também pode acessar seu token neste painel, revelando-o ou pressionando o botão "Copiar". Quando pedimos que você cole seu token em algum lugar, este é o valor que você precisa inserir. Não se preocupe se acontecer de você perdê-lo em algum momento; você pode sempre voltar a esta página e copiá-la novamente.

**O Que é o token do bot?**

Um token é essencialmente a senha do seu bot; é o que o seu bot usa para fazer o login no Discord. Dito isso , é vital que você nunca compartilhe este token com ninguém, propositalmente ou acidentalmente . Se alguém conseguir obter seu token, ele poderá usar seu bot como se fosse dele - isso significa que pode realizar atos maliciosos com ele.

# arquivos principais 

```
DiscordBotV13/

├── config.json

├── index.js

└── package.json

```

**O que é Config.json?**

Armazenar dados em um config.json é uma maneira comum de manter seus valores confidenciais protegidos. Crie um config.json arquivo no diretório do seu projeto e cole no seu token. Você pode acessar seu token dentro de outros arquivos usando ```require().```

**O que é a index.js?**

index.js é o arquivo mais importante para seu bot ele ira armazena os principais codigos do seu bot,mas voce pode mudar para qualquer nome basta e no package.json arquivo e editar o ```"main": "index.js"``` colocando no lugar do nome index 

**O que é o package.json?**

arquivo package. json é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o seu projeto, informar as engines (versão do node e do npm), url do repositório, versão do projeto, dependências de produção e de desenvolvimento dentre outras coisas.


# index.js

este é o script mas importante em nosso bot,com apenas este código o nosso Bot consegui ja fica online!
```js
//pega todas as informações sobre a biblioteca do discord!
const Discord = require("discord.js"); 
//definimos o cliente
const client = new Discord.Client({intents: 32767});
//pega as informações deste arquivo
const config = require("./config.json");
//deixamos o bot online com o seu token
client.login(config.token); 
```

# config.json

na config.json fica armazenado coisas muitos importantes como tokens,senhas e etc...
```
{

    "token":"TOKEN DO SEU BOT!",

    "prefix":"SEU PREFIXO!"

}
```

# comandos 

A menos que seu projeto de bot seja pequeno, não é uma idéia muito boa ter um único arquivo com um gigante ```if/ else if``` corrente para comandos. Se você deseja implementar recursos em seu bot e tornar seu processo de desenvolvimento muito menos penoso, você desejará implementar uma hadler. Vamos começar!

**O que é uma hadler?**

manipulador de comandos ele verifica se tem o prefixo, descrição, categoria e o nome do comando para ver se ele existe!

aqui está um exemplo de uma hadler com subpasta:

```js

const fs = require("fs");

client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

client.categories = fs.readdirSync(`./src/commands/`);

fs.readdirSync('./src/commands/').forEach(local => {

    
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

      let command = client.commands.get(cmd)

      if(!command) command = client.commands.get(client.aliases.get(cmd)) 

    

  try {

      command.run(client, message, args)

  } catch (err) { 

 

     console.error('Erro:' + err); 

  }

      });

```

# exportando os comandos

como visto anterior a hadler usamos para manipulação de comandos,isto quer dizer,que precisamos da hadler para nossos comandos poderem funcionar mas isso não é o bastate para o funcionamento precisamos também do ```module.exports``` e que nossa hadler aceite!

**O Que é module.exports?**

O module. exports nada mais é que uma variável retornada a partir da função require(). E é um objeto vazio por default. O exports na realidade nunca é retornado, obtemos apenas uma referência para o module.

agora veremos um exemplo de module.exports aceita por nossa hadler:
```js

//Módulo de exportação

module.exports = {

//Damos o nome do comando ( não pode ser repetido os nomes)

    name: "nome",

//Damos as aliases ( que não podem ser repetidos)

    aliases: ["aliás"],

//é usado em conjunto com um manipulador de comandos. a parte "async" informa ao javascript que esta é uma função assíncrona, permitindo, portanto, o uso de "await" e ".then".

  run: async (client, message, args) => {
   //seu código do comando aqui dentro!
  }
  }

```

# Exemplo de um comando

neste exemplo de comando vai ser bem simores o famoso comando ping! veja aimqgem logo abaixo, lembrando defina seu prefixo em ```config.json```

![](https://media.discordapp.net/attachments/913139602234171452/921773825274822737/Screenshot_20211218-113404.jpg)

O codigo do comando logo acima ficará da seguinte forma!
```js
//pegamos os arquivos da blibioteca do discord.js 

const Discord = require("discord.js");

//Módulo de exportação

module.exports = {

//Damos o nome do comando ( não pode ser repetido os nomes)

   name: "ping",

//Damos as aliases ( que não podem ser repetidos)

    aliases: ["ping"],

//é usado em conjunto com um manipulador de comandos. a parte "async" informa ao javascript que esta é uma função assíncrona, permitindo, portanto, o uso de "await" e ".then".

  run: async (client, message, args) => {

//manda menssagem no canal com o ping do bot!

      message.channel.send(`**${client.ws.ping}**ms`)

//fechamos nosdo comandos

  }

  }
```

# comandos em embed 

**O que é embed?**
Embeds são um tipo especial de mensagem no Discord, você provavelmente já viu elas antes... aquelas caixinhas que possuem uma corzinha na esquerda e que ainda por cima podem ter imagens, autor, footer e muito mais!

**Logo a seguir vou da exemplo de um comando usando embed! lembra do comando anterior? vamos traformar em embed!**
```js

const Discord = require("discord.js");

module.exports = {

   name: "ping",

    aliases: ["ping"],

  run: async (client, message, args) => {
//definimos a mensagem embed
let embed = new Discord.MessageEmbed()
//descrição da embed
.setDescription(`:ping_pong: Meu ping é de ${client.ws.ping}`)
//cor da embed
.setColor("RANDOM")

message.channel.send({ embeds: [embed] })

  }

  //@kettraworld

  }
  ```
  
  # Manipulação de eventos
  
  O Node.js usa uma arquitetura orientada a eventos, tornando possível executar o código quando um evento específico ocorre. A biblioteca discord.js tira total proveito disso.
  
**O codigo abaixo carrega as pasta que estao nossos eventos:**
```js
fs.readdir("./src/events/", (err, files) => {

  if (err) return console.error(err);

  files.forEach(file => {

    const event = require(`./src/events/${file}`);

    let eventName = file.split(".")[0];

    console.log(`Carregado: ${eventName}`);

    client.on(eventName, event.bind(null, client));

  });

});
```
**aqui temos um evento chamado ready,assim que você liga o seu bot ele vai da as informações mostradas no código:**
```js
module.exports = async (client, message) => {

console.log(`${client.user.tag} foi iniciada em ${client.guilds.cache.size} sevidores!\ntendo acesso a ${client.channels.cache.size} canais!\ncontendo ${client.users.cache.size} usuarios!`);

}
```

**Esperamos que gostem do bot,estamos deixando ele livre para qualquer pessoa baixar e dando uma breve espricacões dos comandos! eventos e etc!**

para ```+informações``` veja o nosso [wiki](https://github.com/kettraworld/DiscordBotv13/wiki)

........
