const sumAll = function(a, b) {
    // What if input values are not positive integers, should I implement a check?
    if (!Number.isInteger(a) || !Number.isInteger(b)) {return 'ERROR';}
    if (a < 0 || b < 0) {return 'ERROR';}

    let resultSum = 0;
    let minValue, maxValue;
    // The for loop will iterate starting from the minimum input value to the highest input value.
    if (a <= b) {minValue = a; maxValue = b;}
    else {minValue = b; maxValue = a;}

    // Loop
    for (let i = minValue; i <= maxValue; i++){
        // minValue will store a different value each iteration, going from the lowest to the
        // highest inside the input range       
        resultSum += i; 
    }
    return resultSum;
};


// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// Do not edit below this line
module.exports = sumAll;
