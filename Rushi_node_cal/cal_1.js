function calculate(n1, n2, op){
    var res;
    switch(op) {
        case 1:
            res = n1 + n2;
            console.log(`${n1} + ${n2} = ${res}`);
            console.log("\n");
            break;

        case 2:
            res = n1 - n2;
            console.log(`${n1} - ${n2} = ${res}`);
            console.log("\n");
            break;

        case 3:
            res = n1 * n2;
            console.log(`${n1} * ${n2} = ${res}`);
            console.log("\n");
            break;

        case 4:
            if(n2 === 0){
                console.log("Bad Input, Cannot divide by 0");
                console.log("\n");
                break;
            }
            res = n1 / n2;
            console.log(`${n1} / ${n2} = ${res}`);
            console.log("\n");
            break;
        case 5:
            if(n2 === 0){
                console.log("Bad Input, Cannot find modulo by 0");
                console.log("\n");
                break;
            }
            res = n1 % n2;
            console.log(`${n1} / ${n2} = ${res}`);
            console.log("\n");
            break;

        default:
            console.log('Invalid operator input');
            break;
    
    }
}


while(1){
    console.log("Please select the function to be perfromed");
    console.log("Press 1 for Addition\n");
    console.log("Press 2 for Substraction\n");
    console.log("Press 3 for Multiplication\n");
    console.log("Press 4 for Division\n");
    console.log("Press 5 for Modulus\n");
    console.log("Press -1 to exit the calculator\n");
    console.log("\n");
    const operator = parseInt(prompt(":"));
    
    if(operator === -1){
        break;
    }
    const num1 = parseFloat(prompt('First number: '));
    const num2 = parseFloat(prompt('Second number: '));
    
    if(isNaN(num1) || isNaN(num2)) {
        console.log ('Bad Input');
    
    }else {
        calculate(num1, num2, operator);
    }
}
    
    
