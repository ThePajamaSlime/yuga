exports.run = (client, msg, args) => {
    const striker = '215509157837537280';
    if (msg.author.id != striker) return;
    const guild = args.join(' ');
    client.guilds.get(guild).leave();
};