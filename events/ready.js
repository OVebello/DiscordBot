const Discord = require("discord.js")

module.exports = bot => {
    console.log(`${bot.user.username} è online!`)
    bot.user.setActivity("Corinaldo", {type: "WATCHING"});
}