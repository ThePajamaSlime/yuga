const db = require('quick.db');

exports.run = (client, msg) => {
    db.fetchObject(msg.guild.id).then(prefix => {
        msg.reply(`Prefix for this server is: ${prefix.text}`);
    });
};