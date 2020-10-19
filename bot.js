const VkBot = require('node-vk-bot-api');
const data = require("./data.json")
const Markup = require('./markup.js');

const bot = new VkBot(data.token);

bot.command('Привет', async (ctx) =>{
    await ctx.reply(data.welcome, null, Markup.keyboard(data.welcome_opt, {columns:1}).oneTime(),);
});

bot.command('1. Расписание своей группы', async (ctx) => {
   await ctx.reply("Держи");
});

bot.command('2. Расписание замдека', async (ctx) => {
    let answer = data.tutor.fullname + " " + data.tutor.room + "\n" + data.tutor.mail + "\n";
    let dates = data.tutor.dates
    for (let i = 0; i < dates.length; i++){
        answer += data.tutor.dates[i].day + ": " + data.tutor.dates[i].time +"\n";
    }
    await ctx.reply(answer);
});

bot.command('4. Общее облако ИУ9', async (ctx) => {
    let cloud = data.cloud
    await ctx.reply("Держи",cloud[0].link);
});

bot.command('5. Облако группы', async (ctx) => {
    let cloud = data.cloud
    await ctx.reply("Держи", cloud[1].link);
});

bot.startPolling((err) => {
    if (err) {
        console.error(err);
    }
});

console.log("I work");
