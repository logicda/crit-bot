const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have perms to use this command!")
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}