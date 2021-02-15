// Calculator Using JavaScript.

const prompt = require('prompt-sync')();

// function for taking input.
function getInputData(){
    let firstNumber = prompt("First Number: ");
    let secondNumber = prompt("Second Number: ");
    return [firstNumber, secondNumber];
}

// function for Calculation
function startCalculator() {
        let start=1, numbers = [0, 0], arr = ["Addition", "Subtraction", "Multiply", "Divide", "Modulo", "Exponential"];
    do{
        console.log("Please select options: ")
        console.log(`0: close Calculator\n 1: ${arr[0]}\n 2: ${arr[1]}\n 3: ${arr[2]}\n 4: ${arr[3]}\n 5: ${arr[4]}\n 6: ${arr[5]}`)
        start = prompt('Options: ');
        if(start!=0){
            console.log(`${arr[start-1]}`)
            numbers =  getInputData(start);
        }
        console.log(numbers[0]);
        console.log(numbers[1]);
        switch(Number(start)){
            case 0:
                console.log("You pressed 0 to stop calculator\n");
                break;
            case 1:
                result = numbers[0] + numbers[1];
                break;
            case 2:
                result = numbers[0]  - numbers[1];
                break;
            case 3:
                result = numbers[0]  * numbers[1];
                break;
            case 4:
                result = numbers[0]  / numbers[1];
                break;
            case 5:
                result = numbers[0]  % numbers[1];
                break;
            case 6:
                result = numbers[0]  ** numbers[1];
                break;
            default:
                console.log("You pressed wrong option")
                break;
        }
        (start!=0) ? console.log(`\n\n Result : ${result} \n\n`) : console.log(" \n\n ");
    }
    while(start!=0);
}

startCalculator();
