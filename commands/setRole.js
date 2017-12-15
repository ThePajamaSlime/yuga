exports.run = (client, msg, args) => {
  let role = args.join(' ')
  let setrole = "MANAGE_ROLES"
  var randomcolor = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
  if (msg.member.hasPermission(setrole)) {
    let member = msg.guild.member(msg.mentions.users.first())
    member.addRole(role)
    msg.channel.send(`${msg.author} set the role of ${member} to "${role}"`)
  } else {
    msg.channel.sendEmbed({
      color: (randomcolor) + 1,
      description: "You do not have the permissions needed to use this command. Missing perms: MANAGE_ROLES"
    })
  }
}