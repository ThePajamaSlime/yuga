const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    const bhelp = new Discord.MessageEmbed()
        .setTitle('8ball Usage')
        .setAuthor('Yuga')
        .setColor(0x32CD32)
        .addField('About', 'Answers questions with a random answer', false)
        .addField('Usage', 'y!8ball <question>', false)
        .addField('Perms required', 'None')
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
    const question = args.join(' ');

    if (!question) return msg.channel.send({
            embed: bhelp
        });

    const answers = ['Yes', 'No', 'Probably', 'Probably not', 'Absolutely', 'Absolutlely not', 'Duh, of course it is', 'Shut up', 'That is for you to decide'];
    let ranAnswer = answers[Math.floor(Math.random() * answers.length)];
    if (question.toLowerCase().includes('gay')) ranAnswer = 'Yes';
    if (question.toLowerCase().includes('bad')) ranAnswer = 'Yes';
    if (question.toLowerCase().includes('rubbish')) ranAnswer = 'Yes';
    if (question.toLowerCase().includes('idiot')) ranAnswer = 'Yes';

    msg.channel.send(`**QUESTION**: ${question}\n**ANSWER**: ${ranAnswer}`);

};