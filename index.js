const Discord = require("discord.js");

const PREFIX = "k!";

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Ready!`);
});

bot.on('message', message => {
    if (!message.content.startsWith(PREFIX)) {
        return;
    }

    var commands = message.content.substring(PREFIX.length).split(" ");

    switch (commands[0].toLowerCase()) {

        case "print":
            message.channel.sendMessage("Your message here");
            break;
    }

});

bot.login(your token goes here);
//bot.login(process.env.BOT_TOKEN);