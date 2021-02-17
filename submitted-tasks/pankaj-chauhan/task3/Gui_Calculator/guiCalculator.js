// Calculator
// Function to display data on screen.
function displayOnScreen( value ) {
    document.querySelector(".input-area").value += value;
}

//  Function to solve numerical data from display screen and add result to screen.
function solve(){
    let answer = 0;
    try{
        answer = eval(document.querySelector(".input-area").value);
        document.querySelector(".input-area").value = answer;
    }catch(e){
        // if there is any error then display that on screen.
        document.querySelector(".input-area").value = e;
    }
}

//  To clear all data from sreen.
function clearScreen(){
    document.querySelector(".input-area").value = "";
}
//  To clear just last data from screen.
function clearScreenOne(){
    let value1 = document.querySelector(".input-area").value, value2 = "";
    for(let i=0; i<value1.length-1; i++){
        value2 += value1[i];
    }
    document.querySelector(".input-area").value = value2;
}