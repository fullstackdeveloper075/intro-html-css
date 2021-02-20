// lexial-scope in javscript

// Scopes in javscript

// Global scope 
// Local Scope 
// Block Scope 
// Hosting 
// var foo = 100;

// function foo1 () {
//     var bar = 10;
//     console.log(bar); //---> 10
//     console.log(screwed); // --> undefined
//     var screwed = 120;
// }

// var bar = function() {
//     var foo = 20;
//     console.log(foo); // --> 20
// }

// function dynamicScope() {
//     hello = "Dynamic Scope";
//     console.log(foo);
// }
 


// foo1();
// bar();
// dynamicScope();
// console.log(hello);
// // phase2 :
// // glocalScope: {
// //     foo: 100,
// //     hello: "Dynamic Scope"
// //     foo1: function {
// //         bar: 10,
// //         screwed: 120
// //     },
// //     bar: f {
// //         foo: 20
// //     },
// //     dynamicScope: {
        
// //     }
// // }


// foo();
// bar();
// diff();
// console.log(newFunc);
// newFunc();

// var hello = 40;
// var bye = "Wassup";

// function foo() {
//     var bye = "Something new";
//     console.log(hello);
//     console.log(bye);
// }

// function bar() {
//     console.log(hello); 
//     console.log(bye);
//     var hello = "Something hello";
// }

// function diff() {
//     ohh = "I didnt do it "
//     console.log(hello);
//     console.log(bye);
//     console.log(ohh);

// }

// var newFunc = function() {
//     var soSorry = "this is a new";
//     console.log(hello);
//     console.log(bye);
// }

// var x = 10;

// function lexicalScope() {
//     if (x > 20) {
//         var x = 30;
//     }
//     console.log(x);
// }
/*
global Scope : Anyone acces to this variable
local Scope : Withing in your function declaration
Lexical Scope: if the function doesnt able to find the variable inside the function it look for parent scope 
block scope : variable which can access { }
*/

function blockedScope() {
    {   
        var myLetVar = 10;
        console.log(myLetVar);  
    }

    {
        
        console.log(myLetVar);
        var myLetVar = 20;
    }
    console.log(myLetVar);
}


array = 10
array1 = 20; 
function ForLoop() {
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

    for (;index < array1.length; index++) {
        const element = array[index];
        
    }

}

function interestingQuestion() {
    for (let index = 0; index < 10; index++) {
        let i = 10;
        setTimeout(() => {
            console.log(i);
            i++;
        }, 1);
    }
}




