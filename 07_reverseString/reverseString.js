const reverseString = function(inputString) {
    let stringToArray = inputString.split("");
    let reversedArray = stringToArray.reverse();
    let outputString = reversedArray.join("");
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
