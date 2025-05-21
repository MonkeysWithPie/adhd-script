const messages = {
    welcome: [
        "oh, hi!",
        "ya need something calculated? good thing you came here!",
        "hi-hi! what's up?",
        "hey, hey, hey!",
    ],
    bye: [
        "oh, alright. bye!",
        "have a good day! please. it will be really bad if you don't.",
        "peace!",
        "see ya later!",
        "buh-bye!",
    ],
    prompt: [
        "what's your question?",
        "i'm all ears!",
        "what's on your mind?",
        "what's your problem? in like, a nice way.",
    ],
    distracted: [
        "....wait, sorry, i was busy thinking about my life choices. ask again?",
        "wait, hold on, i just had a brilliant idea i need to go write down...",
        "aren't dragons like, awesome? ...what? did you need something?",
        "sorry, i was just thinking about how i should be writing my project. what were you saying?",
        "i'm so tired... do i have to? i'll do it later...",
    ],
    result: [
        "is",
        "i think is",
        "uhhhhh is",
        "...is",
        "...i wanna say that's",
        "iiiiiiiiiiiiiiis",
        "ummm... i think is",
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
        "...this is so much! what the hell!",
        "i think this amount of work could be classified as torture. i'm not doing this.",
        "whatever, this is a miniscule part of my grade, i can't be bothered.",
        "...wait, so why am i here?",
        "...y'know what? screw this."
    ]
}

function getMessage(type) {
    return messages[type][Math.floor(Math.random() * messages[type].length)];
}

module.exports = { getMessage, messages };