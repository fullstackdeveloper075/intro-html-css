
let result;

const operator = prompt('Enter operator ( either +, -, * or / ): ');


const n1 = parseFloat(prompt('Enter first number: '));
const n2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = n1 + n2;
        console.log(`${n1} + ${n2} = ${result}`);
        break;

    case '-':
         result = n1 - n2;
        console.log(`${n1} - ${n2} = ${result}`);
        break;

    case '*':
         result = n1 * n2;
        console.log(`${n1} * ${n2} = ${result}`);
        break;

    case '/':
         result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}