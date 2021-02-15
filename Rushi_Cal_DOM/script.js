function insert(num){
    document.form.input.value=document.form.input.value+num;
  }
  
  function equals(){
    var input_number=document.form.input.value;
    if(input_number){
        document.form.input.value=eval(input_number);
    } else {
        document.form.input.value='INVALID';
    }
  }
  
  function reset(){
    document.form.input.value="";
  }
  
  function back(){
    var input_number=document.form.input.value;
    document.form.input.value=input_number.substring(0,input_number.length-1);
  }