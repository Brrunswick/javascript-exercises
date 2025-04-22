const convertToCelsius = function(fTemp) {
  let temp = (fTemp - 32) * 5/9;
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
  let temp = cTemp * (9/5) + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
