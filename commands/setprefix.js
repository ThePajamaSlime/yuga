const db = require('quick.db');

exports.run = (client, msg, args) => {
    const prefix = args.join(' ');

    db.updateText(msg.guild.id, prefix).then(p => {
        msg.channel.send(`Updated prefix for this server to: ${p.text}`);
    });
};