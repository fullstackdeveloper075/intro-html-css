var input, operandArray, operatorArray;

var reg = /(\d+\.\d+)|\d+/g;
var reg1 = /[+\-*\/]/g;

var i = 0;

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.setPrompt(`Input: `);
readline.prompt();

readline
    .on("line", function (ip) {
        switch (ip.trim().toLowerCase()) {
            case "exit":
                readline.close();
                break;
            default:
                i = 0;
                input = ip;
                operandArray = input.match(reg);
                operatorArray = input.match(reg1);

                var result = operandArray.reduce(calculate);
                console.log(result);
        }
        readline.prompt();
    })
    .on("close", function () {
        console.log("Have a great day!");
        process.exit(0);
    });

function calculate(accumulator, curr, i) {
    if (i === 0) return curr;

    var op, res;
    op = operatorArray[i - 1];

    if (op === "+") {
        res = parseFloat(accumulator, 10) + parseFloat(curr, 10);
    } else if (op === "-") {
        res = accumulator - curr;
    } else if (op === "*") {
        res = accumulator * curr;
    } else {
        res = accumulator / curr;
    }

    return res;
}
