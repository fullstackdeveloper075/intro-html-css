function addition(n) {

    return function(m) {
        return n+m;
    }
}
function subtraction(n) {
    return function(m) {
        return n-m;
    }
}
function multiply(n) {
    return function(m) {
        return n*m;
    }
}
function divide(n) {
    return function(m) {
        return n/m;
    }
}
console.log(addition(75)(37))
console.log(subtraction(75)(37))
console.log(multiply(75)(37))
console.log(divide(75)(37))

