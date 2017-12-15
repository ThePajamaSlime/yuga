exports.run = (client, msg, args) => {
  const Discord = require('discord.js')
	const slaphelp = new Discord.MessageEmbed()
    .setTitle('Slap Usage')
    .setAuthor('Yuga')
    .setColor(0x32CD32)
    .addField('About', 'Slap em!', false)
    .addField('Usage', 'y!slap <tag user>', false)
    .addField('Perms required', 'None')
    
    .setThumbnail('https://cdn.discordapp.com/avatars/294141889010204684/55f1c9fd514c14daa9adaf8b76069a52.png?size=2048294141889010204684/a2cf325cf59528a85a80daba504a26f3.webp?size=256.discordapp.com/https://cdn.discordapp.com/avatars/294141889010204684/55f1c9fd514c14daa9adaf8b76069a52.png?size=2048294141889010204684/c16d1a20330ee306f7f8063004a4ee3f.webp?size=256')
    .setTimestamp()
	let arg = args.join(' ')

	if (!arg) {
		msg.channel.send({embed:slaphelp})
	}
  let slap = 'http://striker.demoted.me/6502.gif'
  let author = msg.author.username
 
  let slappedperson = msg.mentions.users.first()
   let person = slappedperson.username
   
   const slapped = new Discord.MessageEmbed()
     .setTitle(`${person}, you got slapped by **${author}**!`)
     .setImage(slap)
     .setColor(0xff0000)
   
     msg.channel.send({embed:slapped})
}