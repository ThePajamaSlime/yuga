exports.run = (client, guild) => {
  guild.owner.send('Hi! We see you kicked our bot. Could you explain briefly to Striker#7250 why, and we can consider improvements and such. Thanks!');
  client.user.setActivity(`for y!help | ${client.guilds.size} servers`, {
    type: 'WATCHING'
  });

  client.channels.get('308649578318528513').send(`Kick from: ${guild.name}\nOwner: ${guild.owner.user.username}#${guild.owner.user.discriminator} (ID: ${guild.owner.id})`);
};