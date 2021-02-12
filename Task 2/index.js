function Value(a, b, type){
    this.a = a;
    this.b = b;
    this.type = type;
  }
  
  let result = 0 ;
  
  var inputA = window.prompt("Enter First value : ");
  var inputB = window.prompt("Enter Second value : ");
  var typeCal = window.prompt("Enter Type To do calculatation");
  
  // type ADD, SUB, DIV, MUL
  
  var Num = new Value(inputA, inputB, typeCal);
  
  if(Num.type === "ADD"){
      result = Num.a + Num.b;
  }
  else if (Num.type === "SUB") {
      result = Num.a - Num.b;
  }  
  else if (Num.type === "MUL") {
      result =Num.a * Num.b;
  }
  else if (Num.type === "DIV") {
      result = Num.a / Num.b;
  }
  
  console.log(result