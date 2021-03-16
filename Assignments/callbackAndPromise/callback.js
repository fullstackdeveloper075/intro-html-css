//Callback Hell
printDesc(10)
function printDesc(number){
    console.log("Using CallbackHell")
    console.log(number--);
    setTimeout(()=>{ 
        console.log(number--)
        setTimeout(()=>{ 
            console.log(number--)
            setTimeout(()=>{ 
                console.log(number--)
                setTimeout(()=>{ 
                    console.log(number--)
                    setTimeout(()=>{ 
                        console.log(number--)
                        setTimeout(()=>{ 
                            console.log(number--)
                            setTimeout(()=>{ 
                                console.log(number--)
                                setTimeout(()=>{ 
                                    console.log(number--)
                                    setTimeout(()=>{ 
                                        console.log(number--)
                                    },1)
                                },1)
                            },1)
                        },1)
                    },1)
                },1)
            },1)
        },1)
    },1)
}

//Callback
function call(number){
    if(number!=0){
        desc(number)
    }
}
function desc(number){
    console.log(number--);
    setTimeout(()=>{call(number)},100)
}
desc(10)
