// Calculator
// Function to display data on screen.
function displayOnScreen( value ) {
    document.querySelector(".input-area").value += value;
}

//  To clear all data from sreen.
function clearScreen() {
    document.querySelector(".input-area").value = "";
}

//  To clear just last data from screen.
function clearScreenOne() {
    let value1 = document.querySelector(".input-area").value, value2 = "";
    for (let i=0; i<value1.length-1; i++) {
        value2 += value1[i];
    }
    document.querySelector(".input-area").value = value2;
}

// Stack.
class Stack{
    constructor() { this.items = []; }
    push(value) { this.items.push(value); }
    pop() { 
        return (this.items.length<=1) ? -1 : this.items.pop();
    }
    top() { return this.items[this.items.length-1]; }
    isEmpty() { return this.items.length == 0 ; }
}
//  Function to check if It is Number.
function isNumber(num) {
    return (num.charCodeAt()>48 && num.charCodeAt()<58) ?  true : false;
}
//  Function to check order of operators.
function order(value) {
    if(value=='^') return 3;
    else if(value=='*' || value=='/') return 2;
    else if(value=='+' || value=='-') return 1;
}
//  Function to convert 
function inFixToPostFix(str) {
    let s1 = new Stack(), ans = "";
    s1.push("@");
    for (let i=0; i<str.length; ++i) {
        if (isNumber(str[i])) {
            ans += str[i];
        } else {
            while(s1.top()!="@" && order(str[i])<=order(s1.top())) {
                ans += s1.top();
                s1.pop();
            }
            s1.push(str[i]);
        }
    }
    while(s1.top()!="@") {
        ans += s1.top();
        s1.pop();
    }
    return ans;
}
// Evaluate postfix notations.
function evaluate(str) {
    let resultStack = new Stack();
    for(let i=0; i<str.length; i++) {
        console.log(resultStack);
        if (isNumber(str[i])) {
            resultStack.push(str[i]);
        } else { 
            let val1 = resultStack.pop();
            let val2 = resultStack.pop();
            switch (str[i]) {  
            case '+': resultStack.push(val2 + val1); break;  
            case '-': resultStack.push(val2 - val1); break;
            case '*': resultStack.push(val2 * val1); break;  
            case '/': resultStack.push(val2/val1); break;
            }
        }
    }
    return resultStack.top();
}

//  Function to solve numerical data from display screen and add result to screen.
function solve() {
    let answer = 0, str1 = '', str2 = '';
    try {
        str1 = document.querySelector(".input-area").value;
        console.log(str1);
        str2 = inFixToPostFix(str1)
        console.log(str2);
        answer = evaluate(str2);
        console.log(answer);
        document.querySelector(".input-area").value = answer;
    } catch(e) {
        // if there is any error then display that on screen.
        document.querySelector(".input-area").value = e;
    }
}
