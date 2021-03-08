// Calculator Using JavaScript.

const prompt = require('prompt-sync')();

const add = (op1, op2) => op1 + op2;
const subtract = (op1, op2) => op1 - op2;
const multiply = (op1, op2) => op1 * op2;
const divide = (op1, op2) => op1 / op2;
const modulous = (op1, op2) => op1 % op2;
const exponent = (op1, op2) => op1 ** op2;

const operation = (op1, op2, operand) => {
    let result = 0;
    if(operand == "+") result = add(op1, op2);
    else if(operand == "-") result = subtract(op1, op2);
    else if(operand == "*") result = multiply(op1, op2);
    else if(operand == "/") result = divide(op1, op2);
    else if(operand == "%") result = modulous(op1, op2);
    else if(operand == "**") result = exponent(op1, op2);
    return result;
}

// function for Calculation
function startCalculator() {
    let start=1, firstNumber, secondNumber, result;
    do {
        console.log("Please select options: ")
        console.log(`0: close Calculator\n Addition: +\n Subtraction: -\n Multiply: *\n Divide: /\n Modulous: %\n Exponent: **`)
        start = prompt('Option: ');
        if (start!=0) {
            firstNumber = Number(prompt("First Number: "));
            secondNumber = Number(prompt("Second Number: "))
            result = operation(firstNumber, secondNumber, start);
            console.log(`\n\n ${firstNumber} ${start} ${secondNumber} = ${result}\n\n`);
        }
    } while(start!=0);
}

startCalculator();
