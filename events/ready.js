exports.run = (client) => {

  let guilds = client.guilds.size
  client.user.setActivity(`for y!help | ${guilds} servers`, {
    type: "WATCHING"
  })
  console.log(`Yuga is connected to the Discord WebSocket`)
  const channel = client.channels.get('308278703283240960');
  if (channel) channel.send('Yuga is now online!');
}