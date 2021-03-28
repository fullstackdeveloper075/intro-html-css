let numOne, numTwo, op, another;

function calc () {
        do {numOne = Number(prompt('Enter your first number:'))}
        while (numOne <= 0 || isNaN(numOne));
        do {op = (prompt('Enter the operation you wish to perform:'));}
    while (op !== '+' && op !== '*' && op !== '-' && op!== '/' && op !== '%');
    // validateOp(op);

    do {numTwo = Number(prompt('Enter your second number:'));}
    while (numTwo <= 0 || isNaN(numTwo));
    // validateNum(numTwo);

    if (op === '+') {
        console.log(numOne + '+' + numTwo + '=' +(numOne + numTwo));}
    else if (op === '-') {
        console.log(numOne + '-' + numTwo + '=' +(numOne - numTwo));}
    else if (op === '*') {
      console.log(numOne + '*' + numTwo + '=' +(numOne * numTwo));}

    else if (op === '/') {
        console.log(numOne + '/' + numTwo + '=' +(numOne / numTwo));}
    else {
        console.log(numOne + '%' + numTwo + '=' +(numOne % numTwo));}

    another = prompt('Do you want to perform another calculation? Y/N?')

    };

calc ();
do {calc ()}
while (another === 'y' && 'Y'); 
end();