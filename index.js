const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Katana, !help")
    console.log("CherryBot Are Ready");
});

bot.login("NTI5ODI5Njg5NDY5MDQyNzA2.Dw2iHQ.GEQ48Ci7qSykyl3xYnHEkHXblCc");
