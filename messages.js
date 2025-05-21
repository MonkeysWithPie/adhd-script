const messages = {
    welcome: [
        "oh, hi!",
        "ya need something calculated? good thing you came here",
        "hi-hi! what's up?",
        "hey, hey, hey!"
    ],
    bye: [
        "oh, alright. bye!"
    ],
    prompt: [
        "what's your question?",
        "i'm all ears",
        "what's on your mind?",
        "what's your problem? in like, a nice way",
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
        "i wanna say that is",
        "iiiiiiiiisssssssss",
        "ummm... i think is"
    ],
    correction: [
        "no, wait, it's",
        "...wait, i meant to say",
        "that looks wrong... OH! it's",
        "no... sorry, the tired is getting to me, it's",
        "no wait- how did i miss that? it's",
    ],
    error: [
        "what what huh? sorry i think you're speaking alien",
        "i know typing is hard, but i think you can do better",
        "i'm listening, but what the hell does any of that even mean?",
    ],
}

function getMessage(type) {
    return messages[type][Math.floor(Math.random() * messages[type].length)];
}

module.exports = { getMessage, messages };