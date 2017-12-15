exports.run = (client, msg) => {
    const jokes = ['Stephen Hawking had a heart attack earlier this year\nThey took him to PC world for repairs.', 'Isn\'t \'sleep and you\'ll feel better\' the same as \'turn it off and back on\' ', 'Why did the chicken cross the road?\nTo get to the taco store.\n\n\n***Nobody expects the taco store***', 'Why are koalas not actual bears?\nThey don\'t have the koalafications.', 'What did the quater say to the penny?\nYou don\'t make much cents.', 'Why did the can crusher quit his job?\nIt was soda pressing.', 'Yknow that feeling you get when you\'re in a relationship?\nThat\'s common sense leaving your body.', 'Why could the bicycle not stand up by itself?\nIt was two tired.'];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    JSON.stringify(joke);
    msg.channel.send(joke);
};