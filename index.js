const Discord = require("discord.js");

var PREFIX = "!"

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Katana, !help")
    console.log("CherryBot Are Ready");

    module.exports = (self) => {
        self.registerCommand('streaming', function (msg, args) {
          this.self.editStatus(this.config.defaultStatus.toLowerCase(), {name: args ? args.join(' ') : 'nothing', type: 1, url: 'https://www.twitch.tv/twitch'})
          this.send(msg, '👌')
        })
      }
});

bot.login("NTI5ODI5Njg5NDY5MDQyNzA2.Dw2iHQ.GEQ48Ci7qSykyl3xYnHEkHXblCc");
