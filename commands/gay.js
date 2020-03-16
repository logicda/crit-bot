const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args, prefix) => {

      let gayUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!gayUser) return message.channel.send("Make sure you mention someone!");

  
    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **I think ${message.mentions.users.first().username} is ${gay}% gay!** :gay_pride_flag:`);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
};