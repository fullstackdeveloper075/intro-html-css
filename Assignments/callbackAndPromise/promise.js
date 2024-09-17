function printDesc(number){
    return new Promise((resolve, reject) => {
        console.log(number--);
        number != 0?
         resolve(number)
         :reject(number);
    })
}
printDesc(10)
.then((number) => printDesc(number))
.then((number) => printDesc(number))
.then((number) => printDesc(number))
.then((number) => printDesc(number))
.then((number) => printDesc(number))
.then((number) => printDesc(number))
.then((number) => printDesc(number)) 
.then((number) => printDesc(number))
.then((number) => printDesc(number))
.then((number) => printDesc(number))
.then((number) => printDesc(number))
.catch((number) => console.log(`reached ${number}`))
