function calculator(){
    // add, subtract, multiply, divide
    var total = 0; 
    total;
    var total = 0; 
    total; 0

    return {
        add: function(num){
            total = total + num; 
        },
        subtract: function(num){
            total = total - num; 
        },
        multiply: function(num){
            total = total * num;
        } ,
        divide: function(num){
            total = total / num; 
        } ,
         getTotal: function(){
        	return total; 
        }

    }
   /* return {
        add,
        subtract,
        multiply,
        divide,
        getTotal
    }
    function add (num) {
        total = total + num
    }
    function subtract (num) {
        total = total - num
    }
    function divide (num) {
        total = total / num
    }
    function multiply (num) {
        total = total * num
    }
    function getTotal(){
        return total; 
    }*/

}
var calc = calculator();
calc.add(5);
calc.multiply(500);
calc.divide(100);
calc.subtract(5);
var total = calc.getTotal();
console.log(total);
