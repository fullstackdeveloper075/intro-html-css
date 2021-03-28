const calculator = () => {
  const history = [0];

  const isNumber = (number) => {
    if (isNaN(number)) throw new Error(`Add correct values`);
    return true;
  };

  const validOperation = (operation) => {
    let ops = ["*", "/", "+", "-", "%"];
    if (ops.find((op) => op == operation)) return true;
    else throw new Error(`Add correct values`);
  };

  const calculate = (initialValue, operation, ...args) => {
    let result = initialValue;

    if (validOperation(operation)) {
      for (let i = 0; i < args.length; i++) {
        if (!isNumber(args[i])) return;
        result = operate(result, args[i], operation);
      }
    }
    return result;
  };

  const getHistory = () => {
    return history;
  };

  const operate = (a, b, c) => {
    let res = eval(`${a} ${c} ${b}`);
    history.push(res);
    return res;
  };

  return {
    calculate,
    getHistory,
  };
};

const myCalculator = calculator();

const result = myCalculator.calculate(
  myCalculator.getHistory()[myCalculator.getHistory().length - 1],
  "-",
  10,
  20,
  30
);
let result2 = myCalculator.calculate(
  myCalculator.getHistory()[myCalculator.getHistory().length - 1],
  "*",
  6
);
let result3 = myCalculator.calculate(
  myCalculator.getHistory()[myCalculator.getHistory().length - 1],
  "+",
  666,
  420,
  69
);

console.log(result, result2, result3);
