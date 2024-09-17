var n1, n2, ch;

function calculate(n1, n2, ch){
    const result = null;
    switch(ch){
        case 1:
            res = n1 + n2;
            break;
        case 2:
            res = n1 - n2;
            break;
        case 3:
            res = n1 * n2;
            break;
        case 4:
            res = n1 / n2;
            break;
        case 5:
            res = n1 ** n2;
            break;
        default:
            res = "Option not available";
            break;
    }
    return result;
}

prompt("Select operation");
prompt("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Power");
ch = Number(prompt("Enter your choice:"))
n1 = Number(prompt("Enter number 1:"))
n2 = Number(prompt("Enter number 2:"))
res = calculate(n1, n2, ch);
console.log("Result:", res);