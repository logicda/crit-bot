const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are not a staff member!");
    
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
.addField("Staff Commands Only",["Here are all the Commands"],true)
    .setColor("#00990f")
    .setThumbnail(sicon)

    .addField("-ban", ["@ the user, please add a reason!!"],true)

    .addField("-annouce",["Only use this commmand when using annoucements!"],true)

    .addField("-clear",["The clear limit goes up to 100."],true)

    .addField("-ping",["Do this command to check the latency of the bot!"],true)

    .addField("-say",["This is for fun and jokes. Dont abuse this."],true)

    .addField("-userinfo",["Shows this user's info."])

.addField("Contact Uzi for help!",["Bot Made By uzi"],true)
.addField("Join Our Discord Server!",["https://discord.gg/J4rsDzb"],true)

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"helpmod"
}