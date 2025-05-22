const mults = {
    WORD: 2.5,
    SHORT_SPLIT: 8,
    LONG_SPLIT: 15,
}

const specialWaitMults = {
        ' ': mults.WORD,
        ',': mults.SHORT_SPLIT,
        ';': mults.SHORT_SPLIT,
        '.': mults.LONG_SPLIT,
        '!': mults.LONG_SPLIT,
        '?': mults.LONG_SPLIT,
        ':': mults.LONG_SPLIT,
}

async function printMessage(message, sleepMs = 25) {
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        process.stdout.write(char);

        if (parseInt(message[i-1]) >= 0 && parseInt(message[i+1]) >= 0 && char === '.') {
            await sleep(sleepMs);
            continue;
        }

        await sleep(sleepMs * (specialWaitMults[char] || 1));
    }

    process.stdout.write('\n');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { printMessage };