const { getMessage } = require("./messages");
const { printMessage } = require("./printMessage");

async function calculate(equation) {
    if (Math.random() < 0.7) {
        printMessage(getMessage("distracted"));
        return null;
    }

    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "^": (a, b) => Math.pow(a, b),
    };

    // give up because this seems really complicated to implement
    printMessage("idk... like... four?");
    return 4;
}

module.exports = { calculate };