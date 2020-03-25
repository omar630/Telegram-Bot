const Telegraf = require('telegraf');
const bot = new Telegraf('1138130470:AAFBN3MaV4U33ztpHEUwCLlkU4mCuYKS7lI'); //Bot Token

//code
bot.start((ctx) => {
    ctx.reply("Hi");
})

bot.launch();
