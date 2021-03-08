
const calculator = () => {


    let totalValue = 0;
    const history = [];


    //#region validations
    const isNumber = (number) => {
        if (isNaN(Number(number)))
            throw new Error(`${number} is not a number`);
        else
            return true;
    }
    
    //#endregion


    
    const calculate = (initialValue, operation, ...args) => {
        let result = initialValue;
        for (let i = 0; i < args.length; i++) {
            if (!isNumber(args[i])) return;

            result = operation(result, args[i]);
        }
        return result;
    }



    const setTotal = (newValue) => {
        if (!isNumber(newValue)) return;

        totalValue = newValue;
        history.push(totalValue);
    }

    const updateTotal = (number, operation) => {
        if (!isNumber(number)) return;

        return operation(totalValue, number);
    }

    const getTotal = () => {
        return totalValue;
    }

    //#region  default functionalities
    const addInTotal = (number) => {
        if (!isNumber(number)) return;

        const result = totalValue + number;
        setTotal(result);
        return result;
    }

    const subtractFromTotal = (number) => {
        if (!isNumber(number)) return;

        const result = totalValue - number;
        setTotal(result);
        return result;
    }

    const multiplyInTotal = (number) => {
        if (!isNumber(number)) return;

        const result = totalValue * number;
        setTotal(result);
        return result;
    }

    const divideFromTotal = (number) => {
        if (!isNumber(number)) return;

        const result = totalValue / number;
        setTotal(result);
        return result;
    }

    //#endregion

    //#region History

    const clearHistory = () => {
        return history.splice(0, history.length);
    }

    const getHistory = () => {
        return history;
    }

    //#endregion

    return {
        calculate,
        updateTotal,
        getTotal,
        setTotal,
        addInTotal,
        subtractFromTotal,
        multiplyInTotal,
        divideFromTotal,
        getHistory,
        clearHistory
    }

}

const add = (a, b) => {
    return a + b;
}

const myCalculator = calculator();

const result = myCalculator.calculate(0, add, 10, 20, 30);

console.log(result);

