const getTheTitles = function(obj) {
    let bookTitles = [];
    for (let i = 0; i < obj.length; i++) {
        bookTitles.push(obj[i].title);
    }

    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
