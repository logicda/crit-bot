const Discord = require("discord.js");
const botconfig = require("../botconfig.json")


module.exports.run = async (bot, message, args) => {
   
    if(message.author.id != "469968827514617874") return message.channel.send("You are not the bot owner!")

    try{
        await message.channel.send("**_Bot is shutting down..._**")
        console.log(`**Shutting Down....**`)
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
}
module.exports.help = {
  name: "shutdown"
}