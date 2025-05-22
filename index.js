const { getMessage } = require('./messages.js');
const { printMessage } = require('./printMessage.js');
const { calculate } = require('./calculate.js');
const readLine = require('readline');

async function main() {
    const input = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const askQuestion = (query) => {
        return new Promise(resolve => input.question(query, resolve));
    };

    await printMessage(getMessage('welcome'));
    let state = {
        firstUsage: true,
    }
    let userInput;

    while (userInput !== 'exit') {
        await printMessage(getMessage('prompt'));

        if (state.firstUsage) {
            await printMessage("(type in any math problem, or type 'exit' to leave)", 2);
            state.firstUsage = false;
        }

        userInput = await askQuestion('> ');
        userInput = userInput.trim();
        
        if (userInput === 'exit') {
            await printMessage(getMessage('bye'));
            break;
        } else if (userInput === 'mrrow') {
            await printMessage("that's true! but... do you want me to do math?")
        }
        else {
            await calculate(userInput);
        }
        
        await printMessage(" ", 400);
    }

    input.close();
}

main()