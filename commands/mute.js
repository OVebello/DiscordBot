const Discord = require("discord.js")
const botsettings = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    let Muted = message.guild.roles.cache.get('722492893071147038');
    const member = message.mentions.members.first();

    member.roles.add(Muted);
    message.channel.send('OK!')
}


module.exports.config = {
    name: "mute",
    description: "Muta un utente",
    usage: ";mute",
    accessableby: "Staff",
    aliases: []
}