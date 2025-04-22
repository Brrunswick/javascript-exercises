const removeFromArray = function(array, ...nums) {
    // return array.slice(0, num-1).concat(array.slice(num));
    newArray = [];
    array.forEach((item) => {
        if (!nums.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
