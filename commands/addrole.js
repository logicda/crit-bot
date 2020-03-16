const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermissions('MANAGE_ROLES')) return message.channel.send('**You don\'t have perms to preform this command!**')
    message.delete()
    const user = message.mentions.members.first();
    if(!user) return message.channel.send('**Please mention a user who you want to give the role to!**')
    const role = message.guild.roles.find(r => r.name === args.slice(1).join(" "));
    if(!role) return message.channel.send('**Please specify a role you want to give to the user!**');
    await user.addRole(role.id), message.channel.send(`**${user} now has the \`${role}\` role`).then(msg => msg.delete(2000));

}


module.exports.help = {
    name: 'giverole'
}
