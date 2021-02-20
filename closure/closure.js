const API = require('./module_pattern');

var start = "Something";

var test = "Chal raha hai";

function lagiPadiHai() {
    var something = "Code pafta gaya";

    console.log(something);
    codeFixKar();
    console.log(test);
}


function codeFixKar() {
    var kaunKarRaha = 'Ravi Gupta';
    console.log(kaunKarRaha);
}

function TestKarteHai() {
    var startKaro= "Lets Start Testing";
    console.log(startKaro);
    lagiPadiHai();
    console.log("Chalo Beer Pite hai");

    function innerFunction() {
        console.log(startKaro);
    }
    innerFunction();
}

TestKarteHai();
//console.log(startKaro);


function closure() {
    var totalMarks = 1000;

    function calulatPercentage(marksYouScored) {
        return marksYouScored / totalMarks * 100;
    }

    return calulatPercentage;
}


const calulatPercentage = closure();
console.log(calulatPercentage(900));

console.log(API(2));



function testSometing() {
    var t = [1, 4, 5, 6, 7, 9]
    return function() {
        var t = [9, 0, 28, 0];
        console.log(t);
    }

    returnF();
    console.log(t);
}

console.log(t);
var someT = testSometing()
console.log(someT().map((i) => i * i));