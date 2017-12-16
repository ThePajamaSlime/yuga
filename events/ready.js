const {
  stringify
} = require('querystring');

const {
  request
} = require('https');

const dbtoken = require('../config.json').dbtoken;

exports.run = (client) => {
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

  const guilds = client.guilds.size;
  client.user.setActivity(`for y!help | ${guilds} servers`, {
    type: 'WATCHING'
  });
  console.log('Yuga is connected to the Discord WebSocket');
  const channel = client.channels.get('308278703283240960');
  if (channel) channel.send('Yuga is now online!');
  setTimeout(function() {
    client.channels.get('308278703283240960').send(`Yuga's recent pings are: ${client.pings}, with an average of ${client.ping}. (API response time for Discord)`),
      1200000;
  });
};
