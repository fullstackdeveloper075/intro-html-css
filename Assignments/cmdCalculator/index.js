const readline = require("readline");
var n1, n2, ch;


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calculate(n1, n2, ch){
    let res;
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
        case 6:
            res = "exit";
            break;
        default:
            res = "Option not available";
            break;
    }
    return res;
}

function call(){
    rl.question("Enter your choice: ", function(ch) {
        if(ch == '6'){
            rl.close()
        }
        rl.question("Enter number 1:", function(n1) {
            rl.question("Enter number 2:", function(n2){
                res = calculate(Number(n1), Number(n2), Number(ch));
                if(res == 'exit'){
                    rl.close();
                }
                console.log(`Result : ${res}`)
                rl.question("Do you want to exit(y/n):", function(res){
                    if(res == 'y'){
                        rl.close();
                    }
                    else{
                        call()
                    }
                })
            })
        });
    });
    rl.on("close", function() {
        //console.log("\nBYE BYE !!!");
        process.exit(0);
    });    
}

console.log("Select operation");
console.log("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Power\n6. Exit");
call();



