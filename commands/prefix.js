const sql = require('sqlite');

sql.open('../db/customprefixes.sql')

exports.run = (client, msg, args) => {
    const prefix = args.join(' ')
    sql.get('SELECT * FROM customprefixes').then(row => {
        if (!row) {
            sql.run("INSERT INTO customprefixes (guildID, prefix) VALUES (?, ?)", [msg.guild.id, prefix]);
        } else {
            sql.run(`UPDATE customprefixes SET prefix = ${prefix} WHERE guildID = ${msg.guild.id}`);
        }
    }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS customprefixes (guildID TEXT, prefix TEXT)").then(() => {
            sql.run("INSERT INTO customprefixes (guildID, prefix) VALUES (?, ?)", [msg.guild.id, prefix]);
        });
    });

    msg.channel.send(`Set the prefix for this server to ${prefix}`)
}