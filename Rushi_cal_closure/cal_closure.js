function print(input) {
  console.log(input) 
}

function operations(operator) {  
  num1 = 20
  num2 = 10
  function add() {
    return num1 + num2
  }
  function multiply() {
    return num1 * num2
  }
  function divide() {
    return num1 / num2
  }
  function subs() {
    return num1 - num2
  }
  if(operator == '+') {
    return add() 
  }else if(operator == '*') {
   return multiply() 
  }else if(operator == '/'){
    return divide()
  }else if(operator == '-'){
      return subs()
  }
}

const op = prompt("Operation: ");
var result = operations(op)
print(result)