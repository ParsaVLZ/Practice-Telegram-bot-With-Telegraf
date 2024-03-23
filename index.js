const {Telegraf, Context} = require('telegraf');
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);

//bot.start((Context) => {
//    Context.telegram.sendMessage(Context.chat.id,"به ربات پارسا خوش آمدید")
//});
//bot.help((Context) => {
//   Context.reply("راهنمایی نداریم. متاسفم خودت یه کاریش کن")
//})
//bot.settings((Context) => {
//    Context.reply("تنظیماتی در اختیارت نیست")
//})
bot.command("start", Context => {
    Context.telegram.sendMessage(Context.chat.id,"به ربات پارسا خوش آمدید")
})
bot.command("help", Context => {
    Context.reply("راهنمایی نداریم. متاسفم خودت یه کاریش کن")
})
bot.command(["settings", "setting", "Settings", "Setting"], Context => {
    Context.reply("تنظیماتی در اختیارت نیست")
})

bot.command("ctx", ctx => {
    const {from, chat, message, botInfo} = ctx;
    console.log(JSON.stringify({from, chat, message, botInfo}, null, 4));
    ctx.reply("logged important object's ctx in terminal ")
})

bot.launch()