const messages = [
    "A new romance is in the future",
    "Ignore previous message",
    "You will marry a professional athlete, if competitive eating can be considered a sport",
    "Enjoy yourself while you can",
    "I see money in your future... it is not yours thought",
    "Help, I'm being prisoner in a javascript code"
];

function randomMsg() {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message)
}

module.exports = { randomMsg }