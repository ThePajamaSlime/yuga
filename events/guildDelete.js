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

  await client.user.setActivity(`for y!help | ${client.guilds.size} servers`, {
    type: 'WATCHING'
  });
  guild.owner.send('Hi! We see you kicked our bot. Could you explain briefly to Striker#7250 why, and we can consider improvements and such. Thanks!');
  client.channels.get('308649578318528513').send(`Kick from: ${guild.name}\nOwner: ${guild.owner.user.username}#${guild.owner.user.discriminator} (ID: ${guild.owner.id})`);
};