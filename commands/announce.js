const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You can not use this command!")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
         argsresult = args.slice(1).join(" ")
         mChannel.send(argsresult)
    } else {
      argsresult = args.join(" ")
      message.channel.send(argsresult)
    }
}

module.exports.help = {
  name: "announce"
}