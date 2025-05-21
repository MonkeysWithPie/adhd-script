const { getMessage } = require('./messages.js');
const { printMessage } = require('./printMessage.js');
const { calculate } = require('./calculate.js');
const readLine = require('readline');

async function main() {
    const input = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    await printMessage(getMessage('welcome'));
    let state = {
        firstUsage: true,
    }
    let userInput;

    while (userInput !== 'exit') {
        await printMessage(getMessage('prompt'));

        if (state.firstUsage) {
            await printMessage("(type in any math problem, or type 'exit' to leave)");
            state.firstUsage = false;
        }

        await input.question('> ').then(async (input) => {
            userInput = input.trim();
        })
        
        if (userInput === 'exit') {
            await printMessage(getMessage('goodbye'));
            break;
        } else {
            await calculate(userInput);
        }
        await printMessage("...", 150);
    }
}

main()