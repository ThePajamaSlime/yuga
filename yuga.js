const dotenv = require('dotenv')
dotenv.config();

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const color = require('./db/db.json').color;

//Event Handler
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const eventFunction = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.login(process.env.TOKEN);

function error(err) {
  const errorembed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('New Error Caught!')
    .setTimestamp()
    .setDescription(`\`\`\`xl\n${err.stack}\`\`\``);
  client.channels.get('385485532458778626').send({
    embed: errorembed
  });
}

process.on('uncaughtException', (err) => {
  error(err);
});