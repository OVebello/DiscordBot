const Discord = require("discord.js")
const botsettings = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    let Muted = message.guild.roles.cache.get('722492893071147038');
    const member = message.mentions.members.first();

    member.roles.remove(Muted);
    message.channel.send('OK!')
}


module.exports.config = {
    name: "unmute",
    description: "Unmuta un utente",
    usage: ";unmute",
    accessableby: "Staff",
    aliases: []
}