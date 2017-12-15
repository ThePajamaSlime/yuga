exports.run = (client, msg, args) => {
    var argresult = args.join(' ')
    msg.channel.sendmsg("INCOMING SPAM!")
    msg.channel.sendmsg(argresult + argresult + argresult + argresult + argresult + argresult + argresult + argresult + argresult)
    msg.channel.sendmsg(argresult + argresult + argresult + argresult + argresult + argresult + argresult + argresult + argresult)
    msg.channel.sendmsg(argresult + argresult + argresult + argresult + argresult + argresult + argresult + argresult + argresult)
    msg.channel.sendmsg(argresult + argresult + argresult + argresult + argresult + argresult + argresult + argresult + argresult)
}