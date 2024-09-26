const Calc = () => {
  let flag = 1;
  do {
    alert("Press the adjacent number to perform an action \n");

    flag = prompt(
      `0: Addition\n1: Substraction\n2: Multiplication\n3: Division\n4: Modulo Divison\n5: Exponention\nRest: Exit`
    );
    if (!(flag in [0, 1, 2, 3, 4, 5])) {
      alert("Goodbye");
      break;
    }

    let num1 = prompt("Enter number 1"),
      num2 = prompt("Enter number 2");

    switch (parseInt(flag)) {
      case 0:
        alert(`Addition of ${num1} ${num2} is ${num1 + num2} \n`);
        break;
      case 1:
        alert(`Substraction of ${num1} ${num2} is ${num1 - num2} \n`);

        break;
      case 2:
        alert(`Multiplication of ${num1} ${num2} is ${num1 * num2} \n`);

        break;
      case 3:
        alert(`Division of ${num1} ${num2} is ${num1 / num2} \n`);

        break;
      case 4:
        alert(`Modulo divison of ${num1} ${num2} is ${num1 % num2} \n`);

        break;
      case 5:
        alert(`Exponention of ${num1} ${num2} is ${num1 ** num2} \n`);

        break;
      default:
        flag = 0;
        break;
    }
  } while (flag);
};
alert("Welcome to console Calc \n");
Calc();
