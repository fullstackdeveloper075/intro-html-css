function  calc () {
    

    for(let i =0; ; i++){
    let a = (prompt('Enter first No'));
    a =parseInt(a);
    let b = (prompt('Enter second No'));
    b = parseInt(b);
    let op = prompt('Enter operation');
    switch(op) {
        case '+' :
            console.log(a+b);
            break;
        
        case '-' :
            console.log(a-b);
            break;
        case '*' :
            console.log(a*b);
            break;
        case '/' :
            console.log(a/b);
            break;
        default:
            console.log('Wrong Input');
            break;
               
    }
let p = prompt('Do you want to continue')



if(p =='N' || p=='n')
break;
}

}
calc();


