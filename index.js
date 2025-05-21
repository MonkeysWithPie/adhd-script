const { getMessage } = require('./messages.js');
const { printMessage } = require('./printMessage.js');
const { calculate } = require('./calculate.js');

async function main() {
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

        // userInput = await getUserInput();

        // test input because no real input yet
        userInput = '2 + 2'; 
        
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