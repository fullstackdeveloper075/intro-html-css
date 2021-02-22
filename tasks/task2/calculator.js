
const readlineSync = require('readline-sync');
const functions = require('./functions');


function readNumber(question) {
    const input = parseInt(readlineSync.question(question));
    return input;
}

function startCalculator() {

    let isRunning = true;

    let calculatedValue = 0;
    while (isRunning) {
        const optionsString = `
*** CALCULATOR ***                
1. Add
2. Substract
3. Multiply
4. Divide
5. Clear Result
6. Exit
*****************
current result : ${calculatedValue}
*****************
enter choice
`;

        const choice = parseInt(readlineSync.question(optionsString));

        switch (choice) {
            case 1:
                const addInput = readNumber(`Enter number you want to add in ${calculatedValue} \n`);
                calculatedValue = functions.add(calculatedValue, addInput);
                break;
            case 2:
                const subInput = readNumber(`Enter number you want to substract from ${calculatedValue} \n`);
                calculatedValue = functions.substract(calculatedValue, subInput);
                break;
            case 3:
                const mulInput = readNumber(`Enter number you want to multiply from ${calculatedValue} \n`);
                calculatedValue = functions.multiply(calculatedValue, mulInput);
                break;
            case 4:
                const divInput = readNumber(`Enter number you want to divide in ${calculatedValue} \n`);
                calculatedValue = functions.divide(calculatedValue, divInput);
                break;
            case 5:
                calculatedValue = 0;
                console.log("result value is reset to zero\n");
                break;
            case 6:
                isRunning = false;
                break;
            default:
                console.log("please select correct option\n");
                break;
        }

    }
};

startCalculator();