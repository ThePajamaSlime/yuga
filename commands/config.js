const Discord = require('discord.js');

exports.run = (client, msg, args) => {

    const guild = client.guilds.get(msg.guild.id);
    const configselection = args.join(' ');
    const channel = msg.channel;
    const configoptions = new Discord.MessageEmbed()
        .setTitle('CONFIG OPTIONS')
        .setAuthor('Yuga')
        .setColor(0xFF0000)
        .addField('Current options', 'welcome msgs\ngoodbye msgs\nwarnings\nALL')
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();

    const confighelp = new Discord.MessageEmbed()
        .setTitle('Warn Usage')
        .setAuthor('Yuga')
        .setColor(0x32CD32)
        .addField('About', 'Configurates all necessary channels for the features such as welcome msgs', false)
        .addField('Usage', 'y!config <any of the config options>\ny!config ALL\ny!config options (to get options)', false)
        .addField('Perms required', 'None')
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();

    if (configselection == 'welcome msgs') {
        channel.startTyping();
        msg.react('✅');
        guild.createChannel('yuga-welcome');
        msg.reply('Welcome msgs configurated!');
        channel.stopTyping();
    }

    if (configselection == 'goodbye msgs') {
        channel.startTyping();
        msg.react('✅');
        guild.createChannel('yuga-goodbye');
        msg.reply('Goodbye msgs configurated!');
        channel.stopTyping();
    }

    if (configselection == 'warnings') {
        channel.startTyping();
        msg.react('✅');
        guild.createChannel('yuga-warnings');
        msg.reply('Warnings configurated!');
        channel.stopTyping();
    }

    if (configselection == 'options') {
        channel.startTyping();
        msg.react('✅');
        msg.channel.send({
            embed: configoptions
        });
        channel.stopTyping();
    }

    if (configselection == 'ALL') {
        msg.react('✅');
        channel.startTyping();
        guild.createChannel('yuga-warnings');
        guild.createChannel('yuga-goodbye');
        guild.createChannel('yuga-welcome');
        msg.reply('Everything configurated!');
        channel.stopTyping();
    }
    if (!configselection) {
        channel.startTyping();
        msg.react('✅');
        msg.channel.send({
            embed: confighelp
        });
        channel.stopTyping();
    }
};