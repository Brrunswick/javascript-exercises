const sumAll = function(numOne, numTwo) {
    let sum = 0;

    //first line checks to confirm that both numbers given are positive integers
    if (numOne < 1 || numTwo < 1 || !Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
        return "ERROR"
    }
    else if (numOne < numTwo) {
        for (let i = numOne; i <= numTwo; i++) {
            sum += i;
        }
        return sum;
    } else if (numOne > numTwo) {
        for (let i = numTwo; i <= numOne; i++) {
            sum += i;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
