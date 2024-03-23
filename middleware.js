const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use((ctx, next) => {
    const msg = ctx.message.text;
    if(msg == "parsa") return next();
    return ctx.reply("msg is not parsa")
})
bot.hears("erfan", (ctx) => {
    ctx.reply("Welcome Erfan!")
})
bot.launch()