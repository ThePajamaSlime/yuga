const Discord = require('discord.js');
const {
  stringify
} = require('querystring');

const {
  request
} = require('https');

const dbtoken = require('../config.json').dbtoken;

exports.run = async (client, guild) => {
    const update = () => {
        const data = stringify({
            server_count: client.guilds.size
        });
        const req = request({
            host: 'discordbots.org',
            path: `/api/bots/${client.user.id}/stats`,
            method: 'POST',
            headers: {
                'Authorization': dbtoken,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(data)
            }
        });
        req.write(data);
        req.end();
    };

    update();
    guild = client.guilds.get(guild.id);
    const channel = await guild.createChannel('yuga-info')
    const invite = await channel.createInvite({
        maxAge: 0
    });

    const serveradded = new Discord.MessageEmbed()
        .setAuthor('Yuga')
        .setColor('#08ff00')
        .setTitle('New server added!')
        .setThumbnail(client.user.avatarURL())
        .setDescription('Yuga has been added to a new server!\nThe server info will be displayed below.')
        .addField('Server info', `Name: ${guild.name}\nID: ${guild.id}\nMade: ${guild.createdAt}\nOwner: ${guild.owner.user.tag} (ID: ${guild.ownerID})\nRegion: ${guild.region}\nRoles: ${guild.roles.size}\nVerification Level: ${guild.verificationLevel}\nMembers: ${guild.members.size} \nInvite link: ${invite}`)
        .setTimestamp();

    const channelwelcome = new Discord.MessageEmbed()
        .setAuthor('Yuga')
        .setThumbnail(client.user.avatarURL())
        .setColor('#ff4500')
        .addField('Thanks for adding Yuga!', 'Hi! I\'m Yuga, thanks for adding me.\nI have many features, and if you wish to know them use "y!help" to get a list of all the amazing stuff I can do!\nThanks for listening, and I hope you enjoy using Yuga!')
        .addField('Need to contact us?', 'You can always join the official server and ask for help there!\nWe are English speaking, but we can speak some foreign languages too.\nJoin here: https://discord.gg/vJBrsY6')
        .setTimestamp();

    const ownerwelcome = new Discord.MessageEmbed()
        .setAuthor('Yuga')
        .setThumbnail(client.user.avatarURL())
        .setColor('#ff4500')
        .addField('Thanks for adding Yuga!', 'Hi! I\'m Yuga, thanks for adding me.\nI have many features, and if you wish to know them use "y!help" to get a list of all the amazing stuff I can do!\nThanks for listening, and I hope you enjoy using Yuga!')
        .addField('Need to contact us?', 'You can always join the official server and ask for help there!\nWe are English speaking, but we can speak some foreign languages too.\nJoin here: https://discord.gg/vJBrsY6')
        .setTimestamp();

    client.user.setActivity(`for y!help | ${client.guilds.size} servers`, {
        type: 'WATCHING'
    });

    client.channels.get('308649578318528513').send({
        embed: serveradded
    });
    guild.owner.send({
        embed: ownerwelcome
    });

    channel.send({
        embed: channelwelcome
    });

    channel.send('Yuga requires certain channels to function. To know more, run y!config');
};