
var array = [10, 20, 30, 40, 50, 60];


function addOpeartionOnArray(array, value) { 
    var returnArray = [];
    for (let index = 0; index < array.length; index++) {
        const newValue = array[index] + value;
        returnArray.push(newValue);
    }
    return returnArray;
}

function multiplicationOpertion() {
    var returnArray = [];
    for (let index = 0; index < array.length; index++) {
        const newValue = array[index] * value;
        returnArray.push(newValue);
    }
    return returnArray;
}


function performOperationOnArray(array, operation) {
    var returnArray = [];
    for (let index = 0; index < array.length; index++) {
        const newValue = operation(array[index]);
        returnArray.push(newValue);
    }
    return returnArray;
}

function addToParamter(param) {
    return 2 + param;
}


function squaretheNumber(param) {
    return param ** 2;
}

console.log(performOperationOnArray(array, squaretheNumber));
performOperationOnArray -> highOrderFunction 
opertion -> CallBackFunction

array.map(addToParamter);