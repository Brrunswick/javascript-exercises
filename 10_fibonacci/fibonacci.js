const fibonacci = function(num) {
    const fibArray = [0, 1];
    let number = parseInt(num);
    
    if (number < 0) { 
        return "OOPS"
    }
    
    for (let i = 2; i <= num + 1; i ++) {
        fibArray[i] = fibArray[i-2] + fibArray[i-1];
    }
    return fibArray[num];
};

// Do not edit below this line
module.exports = fibonacci;

