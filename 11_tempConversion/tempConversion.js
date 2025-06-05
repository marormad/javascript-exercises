const convertToCelsius = function(inputTemp) {
  // Input validation
  if (Number.isNaN(inputTemp)) {return 'ERROR';}
  const ABS_ZERO_F = -459.67;
  if (inputTemp < ABS_ZERO_F) {return 'ERROR';}

  let outputTemp = (inputTemp - 32)*5/9;

  return parseFloat(outputTemp.toFixed(1));
};

const convertToFahrenheit = function(inputTemp) {
  // Input validation
  if (Number.isNaN(inputTemp)) {return 'ERROR';}
  const ABS_ZERO_C = -273.15;
  if (inputTemp < ABS_ZERO_C) {return `ERROR`;}

  let outputTemp = inputTemp*(9/5) + 32;
  return parseFloat(outputTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
