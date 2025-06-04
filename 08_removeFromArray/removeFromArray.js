const removeFromArray = function(inputArray, notWantedOnes) {
    // Array that will store the valid values of inputArray, and will be returned at the end
    let outputArray = [];

    // Number of arguments that have to be deleted, excluding first one (inputArray)
    let argumentsCount = arguments.length;

    // Loop to check if inputArray contains values/items that we do not desire.
    // If it doesn't, we add them to outputArray. InputArray won't be modified
    // The boolean variable will trigger the addition of the current value to the outputArray
    let verifier;

    for (let i = 0; i < inputArray.length; i++) {
        verifier = true;
        for (let j = 1; j < argumentsCount; j++) {
            if (inputArray[i] === arguments[j]) { // Added the third '=' to pass last test!
                verifier = false;                               
            }
            if (verifier == false) break; // Upon finding a match, we exit the loop
        }
        // If a match is not found, the value is valid and can be stored
        if (verifier == true) outputArray.push(inputArray[i]);
    }

    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
