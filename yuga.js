const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


const {
  token
} = require('./config.json');

const color = require('./db/db.json').color;
const striker = client.users.get('215509157837537280');

function error(err) {
  const errorembed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('New Error Caught!')
    .setTimestamp()
    .setDescription(`\`\`\`xl\n${err.stack}\`\`\``);
  client.channels.get('385485532458778626').send(striker, {
    embed: errorembed
  });
}

//Event Handler
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const eventFunction = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.login(token);

process.on('uncaughtException', (err) => {
  error(err);
});
