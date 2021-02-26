

function start(){
    
    const operator = prompt('Enter operator ( either +, -, * or / ): ');

    const number1 = parseFloat(prompt('Enter first number: '));
    const number2 = parseFloat(prompt('Enter second number: '));

    if(isNaN(number1) || isNaN(number2))
    {
        alert('number is invalid , Enter Valid Number');
        ContinueOrNot();

    }else{
        // Calculator(operator,number1,number2);
        return function Calculator(){
            let result;
            switch(operator) {
                case '+':
                    result = number1 + number2;
                    alert(`${number1} + ${number2} = ${result}`);
                    break;
        
                case '-':
                    result = number1 - number2;
                    alert(`${number1} - ${number2} = ${result}`);
                    break;
        
                case '*':
                    result = number1 * number2;
                    alert(`${number1} * ${number2} = ${result}`);
                    break;
        
                case '/':
                    result = number1 / number2;
                    alert(`${number1} / ${number2} = ${result}`);
                    break;
        
                default:
                    alert('Invalid operator');
                    break;
            }
            ContinueOrNot();
        }
        
        
    }
}
function ContinueOrNot (){
    let co = prompt('You want to continue or not ,(for contiune type "yes"): ');
    if (co === 'yes')
    {
        startCal = start();
        startCal();
    }else{
        
    }
}

let startCal = start();
startCal();

