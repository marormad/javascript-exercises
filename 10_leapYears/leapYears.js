const leapYears = function(year) {
    // Year validation
    if (!Number.isInteger(year)) {return "ERROR";}
    if (year < 0) {return "ERROR";}

    if (year % 4 == 0 && year % 100 != 0) { // Condition 1 is met + condition 2 is not met
        return true;}
    else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) { // All three conditions are met
        return true;}
    else {return false;}

    /* Chatgpt awesome method: reverse order
    if (year % 400 == 0) {return true;}
    if (year % 100 == 0) {return false;}
    if (year % 4 == 0) {return true;}
    return false;*/
    


};

// Do not edit below this line
module.exports = leapYears;
