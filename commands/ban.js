const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You dont have perms to use this command!")

    let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!banMember) return message.channel.send("Please Mention a User To Ban!")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No Reason Given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have perms to preform this command!")

    message.delete()

    banMember.send(`You have been banned from ${message.guild.name} for: ${reason}`).then(() =>
    message.guild.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))
    
    message.channel.send(`**${banMember.user.tag}** has been banned`)

    let embed = new Discord.RichEmbed()
    .setColor("#840000")
    .setAuthor("Moderation:", "ban")
    .addField("Mutee:", banMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createAt.toLocaleString())

        let sChannel = message.guild.channels.find(c => c.name === "logs")
        sChannel.send(embed)



}
 
module.exports.help = {
  name: "ban"
}