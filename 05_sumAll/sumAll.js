const sumAll = function(a, b) {
    let finalSum = 0;
    if (typeof a === 'string' || typeof b === 'string') {
        return 'ERROR'
    } else if (a > b) {
        for (i = b; i <= a; i++) {
            finalSum += i;
        }
        return finalSum;
    } else if (a > 0 && b > 0) {
    for (i = a; i <= b; i++) {
        finalSum += i;
    }
    return finalSum;
    } else {
        return 'ERROR'
    }    
};

// Do not edit below this line
module.exports = sumAll;
