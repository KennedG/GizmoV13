const Discord = module.require("discord.js");
const { Snake } = require("discord-gamecord")

module.exports = {
  name: "cobra",
  author: "Ned",
  description: "cobra em discord!",// 
  run: async (client, message, args) => {
          new Snake({
        message: message,
        embed: {
        title: 'jogo da cobra',
        color: 'RED',
        OverTitle: "Game Over",
        },
        snake: { head: '🐍', body: '🟩', tail: '🟢' },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️',
          right: '➡️',
          down: '⬇️',
          left: '⬅️',
        },
        othersMessage: 'Você não tem permissão para usar botões para esta mensagem!',
      }).startGame();// feito por NED#6325
  },
};