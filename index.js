const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Katana, !help")
    console.log("CherryBot Are Ready");
});

bot.on("message", async function (message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split("");

    switch(args[0].toLowerCase()) {
       case "invite";
       message.channel.send("test");
       break;
     }
});

bot.login("NTI5ODI5Njg5NDY5MDQyNzA2.Dw2iHQ.GEQ48Ci7qSykyl3xYnHEkHXblCc");
