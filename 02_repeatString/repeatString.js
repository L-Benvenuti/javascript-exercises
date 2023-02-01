const repeatString = function(str, nmb) {
    let repeatedString = '';

    if (nmb < 0) {
        return 'ERROR'
    } else if (nmb > 0) {
        while (nmb > 0) {
        repeatedString += str;
        nmb--;
        }
        return repeatedString;
    } else {
        return ''
    }

};

// Do not edit below this line
module.exports = repeatString;
