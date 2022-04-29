const quotes = [
    "You miss 100% of the shots you don’t take.\n-Wayne Gretzky\n-Michael Scott",
    "I’m not superstitious, but I am a little stitious.\n– Michael Scott",
    "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.\n- Michael Scott",
    "I wanna do a cartwheel. But real casual-like. Not enough to make a big deal out of it, but I know everyone saw it. One stunning, gorgeous cartwheel.\n- Creed Bratton",
    "If I can’t scuba, then what’s this all been about? What am I working toward?\n- Creed Bratton",
    "Actually, I didn’t think it was appropriate to invite children, since it’s uh, you know, there’s gambling and alcohol. It’s in our dangerous warehouse, it’s a school night, and you know, Hooter’s is catering, and is that — is that enough? Should I keep going? \n- Toby Flenderson \nWhy are you the way that you are? Honestly, every time I try to do something fun, or exciting, you make it… not that way. I hate… so much about the things that you choose to be.\n- Michael Scott"
];

const arrayIndex = Math.floor(Math.random() * quotes.length);

const quote = quotes[arrayIndex];

console.log(quote);