const messages = {
    welcome: [
        "oh, hi!",
        "ya need something calculated? good thing you came here!",
        "hi-hi! what's up?",
        "hey, hey, hey!",
    ],
    bye: [
        "oh, alright. bye!",
        "have a good day!",
        "peace!",
        "see ya later!",
        "buh-bye!",
    ],
    prompt: [
        "got a problem?",
        "what's up?",
        "equation time?",
        "i heard there was math?",
        "you got numbers for me to eat?",
        "i don't suppose you have any problems?",
        "got a math problem?",
    ],
    distracted: [
        "...wait, sorry, i zoned out. ask again?",
        "wait, hold on, i just had a brilliant idea i need to go write down...",
        "man, aren't dragons like, awesome? ...what? did you need something?",
        "sorry, i was just thinking about how i should be writing my project. what were you saying?",
        "i'm so tired... do i have to? i'll do it later...",
        "...capitalism and all that... man, the world is fucked up. math? what?",
        "LOOK! A BIRD!! wait, did you say something?",
        "aren't these posters on the wall so pretty? ...what? did you need something?",
        "-and sometimes i just wish my brain was normal. wait, were you-? this is exactly what i mean.",
    ],
    resultEasy: [
        "is [n]",
        "i think is [n]",
        "uhhhhh is [n]",
        "gets ya [n]",
        "equals [n]",
    ],
    resultHard: [
        "...i wanna say that's [n], but i could be wrong",
        "iiiiiiiiiiiiiiis [n] i think",
        "ummm... i think is [n]",
        "isn't that [n]? i think so",
        "hmmm... [n], right? yeah",
        "i think is [n], but don't quote me on that",
    ],
    correction: [
        "no, wait, it's",
        "wait, i meant to say",
        "that looks wrong... OH! it's",
        "no... sorry, the lack of sleep is getting to me, it's",
        "no wait- how did i miss that? it's",
        "shit, wait,",
    ],
    error: [
        "aaand... uhhh... that doesn't seem right?",
        "...you do know that i can't do ALL types of math, right?",
        "...i think it'd be a better idea to go ask Desmos this.",
        "and... oh... that's not basic arithmetic...",
        "...fuckin', i dunno, five??",
    ],
    giveUp: [
        "whatever, this is a miniscule part of my grade, i can't be bothered.",
        "...wait, so why am i here?",
        "...y'know what? screw this.",
        "i'd much rather not finish this one, to be honest.",
        "why...",
        "i know i asked, but i really don't care to do this right now...",
        "huh, this reminds me of when i was doing math that one time and then stopped.",
    ],
    tooLarge: [
        "okay, maybe tone it down a bit with the numbers?",
        "this number size went out of my comfort zone really fast, wow.",
        "i saw a lot of digits and decided i don't want to do this anymore.",
    ],
    giveUpEarly: [
        "...i'm not even gonna try with this one.",
        "no, i'm okay, thank you.",
        "where do i even start? actually, what if i just don't?",
        "...i should be getting paid for this...",
        "nope! sorry.",
        "i'm going to toss out a wild guess and say seventeen and a half.",
    ],
    finished: [
        "...yep! it's",
        "yeah, the answer is",
        "so i'm pretty sure it's",
        "i think it's"
    ]
}
let lastMessages = {};

function getMessage(type) {
    let message = lastMessages[type];
    while (message === lastMessages[type]) {
        message = messages[type][Math.floor(Math.random() * messages[type].length)]
    }

    lastMessages[type] = message;
    return message;
}

module.exports = { getMessage, messages };