const { getMessage } = require("./messages");
const { printMessage } = require("./printMessage");

const operators = {
    "+": { 
        func: (a, b) => a + b,
        precidence: 1,
        text: "plus",
    },
    "-": { 
        func: (a, b) => a - b,
        precidence: 1,
        text: "minus",
    },
    "*": { 
        func: (a, b) => a * b,
        precidence: 2,
        text: "times",
    },
    "/": { 
        func: (a, b) => a / b,
        precidence: 2,
        text: "divided by",
    },
    "^": { 
        func: (a, b) => Math.pow(a, b),
        precidence: 3,
        text: "to the power of",
    },
};

async function calculate(equation) {
    if (Math.random() < 0.5) {
        await printMessage(getMessage("distracted"));
        return null;
    }   
    let result;

    try {
        // do all the calculation
    } catch (e) {
        await printMessage(getMessage("error"));
        await printMessage(`(${e}, ${e.stack})`, 15);
        return null;
    }

    // give up because this seems really complicated to implement
    await printMessage("idk... like... four?");
    return 4;
}


function tokenize(equation) {
    const tokens = [];
    let currentNumber = "";

    for (let i = 0; i < equation.length; i++) {
        const char = equation[i];

        if (char === " ") {
            continue;
        }
        if (parseInt(char) >= 0 && parseInt(char) <= 9) {
            currentNumber += char;
            continue;
        }
        if (currentNumber) {
            tokens.push(parseInt(currentNumber));
            currentNumber = "";
        }

        tokens.push(char);
    }

    return tokens;
}

function parseTokens(tokens) {

}

async function operator(a, b, op, calculations) {
    if (!operators[op]) {
        throw new Error(`no operator for ${op}`);
    }

    if (Math.random() < 0.01 && calculations >= 6) {
        printMessage(getMessage("giveUp"));
        return null;
    }

    const result = operators[op].func(a, b);

    await printMessage(
        operators[op].text + " " + b + " " + getMessage("result") + " " + result + "...",
        50
    )
    return result;
}

module.exports = { calculate };