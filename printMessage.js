async function printMessage(message, sleepMs = 25) {
    const specialWaitMults = {
        ' ': 1.5,
        ',': 3,
        ';': 3,
        '.': 7,
        '!': 7,
        '?': 7,
        ':': 7,
    }

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        process.stdout.write(char);

        await sleep(sleepMs * (specialWaitMults[char] || 1));
    }

    process.stdout.write('\n');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { printMessage };