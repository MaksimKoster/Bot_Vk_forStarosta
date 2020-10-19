const VkBot = require('node-vk-bot-api');
const config = require("./config.json")

const bot = new VkBot(config.token);

bot.command('Начать', (ctx) => {
    ctx.reply('Hello!');
});

bot.startPolling();