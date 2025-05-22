const { getMessage } = require("./messages");
const { printMessage } = require("./printMessage");

const operators = {
    "+": { 
        func: (a, b) => a + b,
        text: "plus",
    },
    "-": { 
        func: (a, b) => a - b,
        text: "minus",
    },
    "*": { 
        func: (a, b) => a * b,
        text: "times",
    },
    "/": { 
        func: (a, b) => a / b,
        text: "divided by",
    },
    "^": { 
        func: (a, b) => Math.pow(a, b),
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
        const tokens = tokenize(equation);
        if (tokens.length >= 10 && Math.random() < 0.4) {
            await printMessage(getMessage("giveUpEarly"));
            return null;
        }
        
        result = await parseTokens(tokens);
    } catch (e) {
        await printMessage(getMessage("error"));
        console.log(e);
        return null;
    }

    if (result === null) {
        return;
    }

    await printMessage(getMessage("finished") + " " + result + ".");
}


function tokenize(equation) {
    const tokens = [];
    let currentNumber = "";

    for (let i = 0; i < equation.length; i++) {
        const char = equation[i];

        if (char === " ") {
            continue;
        }
        if (parseInt(char) >= 0 && parseInt(char) <= 9 || char === ".") {
            currentNumber += char;
            continue;
        }
        if (currentNumber) {
            tokens.push(parseFloat(currentNumber));
            currentNumber = "";
        }
        if (char === "-" && !(typeof tokens[tokens.length - 1] === "number")) {
            currentNumber += char;
            continue;
        }

        tokens.push(char);
    }

    if (currentNumber) {
        tokens.push(parseFloat(currentNumber));
    }

    return tokens;
}

async function parseTokens(tokens) {
    const parseAdd = async (tokens, calculations) => {
        let result = await parseMult(tokens, calculations);

        while (tokens.length > 0 && (tokens[0] === "+" || tokens[0] === "-")) {
            const op = tokens.shift();
            const b = await parseMult(tokens, calculations);
            result = await operator(result, b, op, calculations);
            calculations++;
        }

        return result;
    }

    const parseMult = async (tokens, calculations) => {
        let result = await parsePow(tokens, calculations);

        while (tokens.length > 0 && (tokens[0] === "*" || tokens[0] === "/")) {
            const op = tokens.shift();
            const b = await parsePow(tokens, calculations);
            result = await operator(result, b, op, calculations);
            calculations++;
        }

        return result;
    }

    const parsePow = async (tokens, calculations) => {
        let result = await parseNum(tokens, calculations);

        while (tokens.length > 0 && tokens[0] === "^") {
            tokens.shift();
            const b = await parseNum(tokens, calculations);
            result = await operator(result, b, "^", calculations);
            calculations++;
        }

        return result;
    }

    const parseNum = async (tokens, calculations) => {
        if (tokens.length === 0) {
            throw new Error("no number");
        }

        const token = tokens.shift();
        if (typeof token === "number") {
            return token;
        }

        if (token === "(") {
            const value = await parseAdd(tokens, calculations);

            if (tokens.length === 0 || tokens.shift() !== ")") {
                throw new Error("missing closing parenthesis");
            }
            return value;
        }
        throw new Error("invalid token");
    }

    const result = await parseAdd(tokens, 0);

    return result;
}

async function operator(a, b, op, calculations) {
    if (a === null || b === null) {
        return null;
    }
    if (!operators[op]) {
        throw new Error(`no operator for ${op}`);
    }

    if (Math.random() < 0.02 && calculations >= 0) {
        await printMessage(getMessage("giveUp"));
        return null;
    }

    let mistake = false;

    // if multiplying or dividing, and only one number is negative, chance to flip the sign
    if ((op === "/" || op === "*") && (b < 0 ? !a < 0 : a < 0) && (Math.random() < 0.1)) {
        a = -a;
        await printOperation(a, b, op, calculations, mistake);

        mistake = true;
        a = -a;
    }
    // if adding or subtracting, chance to mix up the operator
    if ((op === "+" || op === "-") && (Math.random() < 0.05)) {
        const newOp = op === "+" ? "-" : "+";
        await printOperation(a, b, newOp, newOp, mistake);

        mistake = true;
    }

    return await printOperation(a, b, op, calculations, mistake);
}

async function printOperation(a, b, op, calculations, mistake) {
    const result = operators[op].func(a, b);
    let toPrint = operators[op].text + " " + b + " " + getMessage("result") + " " + result + "..."
    
    if (mistake) {
        toPrint = "..." + getMessage("correction") + " " + result + ". oops.";
    }

    if (!mistake /* && calculations === 0 */) {
        toPrint = a + " " + toPrint;
    }

    await printMessage(
        toPrint,
        40
    )
    return result;
}

module.exports = { calculate };