function makeCallToDB(id) {
    return {
        id: id, 
        name: 'Ravi Gupta'
    };
}

function API(id) {
    return makeCallToDB(id)
}

module.exports = API;

