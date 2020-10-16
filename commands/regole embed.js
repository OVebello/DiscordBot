const Discord = require("discord.js")
const botsettings = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Queste sono le regole del server:')
        .setURL()
        .setDescription('in caso di cose non gradite verranno aggiunte altre regole')
        .setColor('#0DE9A5')
        .setThumbnail('https://media.discordapp.net/attachments/753931858521358400/755511695891366068/immagine_server.png')
        .addFields(
            { name: 'Regola 1', value: 'No bestemmie a cacchio di cane (escluse le chat vocali quando va bene a tutti)'},
            { name: 'Regola 2', value: 'No spam'},
            { name: 'Regola 3', value: 'No nsfw'},
            { name: 'Regola 4', value: 'Usare i bot solo nei canali per bot'},
            { name: 'Regola 5', value: 'No alts'}
        )

    message.channel.send(embed);
}



module.exports.config = {
    name: "regole",
    description: "Dice le regole in un embed",
    usage: ";regole",
    accessableby: "Everyone",
    aliases: []
}