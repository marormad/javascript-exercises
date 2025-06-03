const repeatString = function(givenString, numberOfIters) {
    let repeatedString = "";
    if (numberOfIters < 0) return "ERROR";
    for (let i = 0; i < numberOfIters; i++) {
        repeatedString += givenString;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
