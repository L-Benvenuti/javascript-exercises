const palindromes = function (str) {
    str = str.replace(/[^\w\s\']|_/g, "") // replace/delete punctiation (replaces for an empty string)
            .replace(/\s+/g, "") // replace/delete whitespaces (replaces for an empty string
            .toLowerCase();
    let reverse = str.split('').reverse().join('');
    return str === reverse
};

// Do not edit below this line
module.exports = palindromes;
