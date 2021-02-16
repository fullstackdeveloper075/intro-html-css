
let currentNumber = '';
let totalResult = 0;
let equation = '';

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function buttonClicked(event) {
    const functions = ['+', '-', '*', '/'];
    const funcRefs = [add, substract, multiply, divide];
    const element = event.target;

    const value = element.innerText;

    let equationElement = document.getElementById('equation');
    let resultElement = document.getElementById('result');

    if((equation.length == 0 && functions.includes(value.trim()))) {
          return;  
    }

    if(equation.length > 0 && functions.includes(value.trim())
        && functions.includes(equation[equation.length - 1])) {
            return 0;
        }

    equation += value.trim();
    equationElement.innerText = equation;

    if (!isNaN(parseInt(value.trim()))) {
        currentNumber += value;
    }

    if (value.trim() == '+') {       
        totalResult = add(parseInt(currentNumber), totalResult);
        currentNumber = '';
    }
    if (value.trim() == '-') {
        totalResult = substract(totalResult, parseInt(currentNumber));
        currentNumber = '';
    }
    if (value.trim() == '/') {
        totalResult = divide(totalResult, parseInt(currentNumber));
        currentNumber = '';
    }
    if (value.trim() == '*') {
        totalResult = multiply(totalResult, parseInt(currentNumber));
        currentNumber = '';
    }

    if (value.trim() == '=') {
        const totalEquation = equation.slice(0, -1);
        const currentNumberLength = currentNumber.length;
        const functionValue = totalEquation[totalEquation.length - 1 - currentNumberLength];
        totalResult = funcRefs[functions.indexOf(functionValue)](totalResult, parseInt(currentNumber)); 
        equation = '';
        resultElement.innerText += ' | ' + totalResult;
        return;
    }

}
