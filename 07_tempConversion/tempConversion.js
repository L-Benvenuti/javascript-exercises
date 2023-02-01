const convertToCelsius = function(far) {
    let cResult = (far - 32) * 5/9;
    let cRounded = Math.round(cResult * 10)/10;
    return cRounded;
};

const convertToFahrenheit = function(cel) {
    fResult = (cel * 9/5 + 32);
    let fRounded = Math.round(fResult * 10)/10;
    return fRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
