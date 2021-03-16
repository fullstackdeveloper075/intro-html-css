

function checkForCompletion(number, callBack) {
    let err;
    console.log(number--);
    if (number <= 0) {
        err = true;
        return;
    }
    callBack(err, number);
}

// callBack hell
function reducedToZero(number) {
    checkForCompletion(number, (err, number) => {
        if (err) return '';
        checkForCompletion(number, (err, number) => {
            if (err) return '';
            checkForCompletion(number, (err, number) => {
                if (err) return '';
                checkForCompletion(number, (err, number) => {
                    if (err) return '';
                    checkForCompletion(number, (err, number) => {
                        if (err) return '';
                        checkForCompletion(number, (err, number) => {
                            if (err) return '';
                            checkForCompletion(number, (err, number) => {
                                if (err) return '';
                                checkForCompletion(number, (err, number) => {
                                    if (err) return '';
                                    checkForCompletion(number, (err, number) => {
                                        if (err) return '';
                                        checkForCompletion(number, (err, number) => {
                                            if (err) return '';
                                            checkForCompletion(number, (err, number) => {
                                                if (err) return '';
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}


reducedToZero(10);


// Promises
const resolveIfNotZero = (number) => {
    return new Promise((resolve, reject) => {
        console.log(number--);
        if (number != 0)
            return resolve(number);
        else
            return reject('completed');
    });
}



resolveIfNotZero(10)
    .then((n) => resolveIfNotZero(n))
const resolveIfNotZero = (number) => {
    return new Promise((resolve, reject) => {
        console.log(number--);
        if (number != 0)
            return resolve(number);
        else
            return reject('completed');
    });
}



resolveIfNotZero(10)
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .then((n) => resolveIfNotZero(n))
    .catch(_ => '');


