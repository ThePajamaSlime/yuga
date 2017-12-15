exports.run = (client, msg, args) => {
      var argresult = args.join(' ');
      msg.delete();
      console.log(msg.author.tag + ' Is saying ' + argresult);
      msg.channel.send("\u200B" + argresult);
}