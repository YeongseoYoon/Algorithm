const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    console.log(`${line} is ${line % 2 === 0 ? 'even': 'odd'}`)
})