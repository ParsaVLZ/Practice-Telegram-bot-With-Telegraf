const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.hears("nodejs", ctx => {
//     ctx.reply("یک ران تایم برای اجرا کردن جاوااسکریپت جهت توسعه ی سرور میباشد");
// })
// bot.hears(/.nodejs./, ctx => {
//     ctx.reply("یک ران تایم برای اجرا کردن جاوااسکریپت جهت توسعه ی سرور میباشد");
// })
bot.hears(/(fuck|sex|bishoor)/gi, ctx => {
    ctx.deleteMessage();
    ctx.reply("اخطار: بی ادب نباش");
})

bot.launch()