const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.on("text", (ctx) => {
    ctx.reply("You send text for me!")
})
bot.on("audio", (ctx) => {
    ctx.reply("You sent audio for me!")
})
bot.on("photo", (ctx) => {
    ctx.reply("You sent audio for me!")
})
bot.on("voice", (ctx) => {
    ctx.reply("You sent voice for me!")
})
bot.on("video", (ctx) => {
    ctx.reply("You sent video for me!")
})
bot.on("sticker", (ctx) => {
    ctx.reply("You sent sticker for me!")
})
bot.on("new_chat_photo", (ctx) => {
    ctx.reply("Admin changed the group photo!")
})
bot.on("new_chat_members", (ctx) => {
    const username = ctx.message.new_chat_member.username ?? ctx.message.new_chat_member.first_name
    ctx.reply(`Welcome Dear ${username}!`)
})
bot.launch()