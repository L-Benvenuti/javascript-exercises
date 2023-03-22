const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(item => {sum += item});
  return sum
};

const multiply = function(arr) {
  let mult = arr.reduce((a, b) => a*b);
  return mult
};

const power = function(a, b) {
  let power = 1;
  for (let i = 0; i < b; i++){
    power *= a
  };
  return power
};

const factorial = function(a) {
	if (a < 0) {
    return -1;
  } else if (a == 0) {
    return 1;
  } else {
    return (a * factorial(a - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
