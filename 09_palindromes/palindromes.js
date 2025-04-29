
const palindromes = function (str) {

    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789"
    const forward = str.toLowerCase().split('').filter((character => alphanumerical.includes(character))).join('');
    const reverse = forward.split('').reverse().join('');

    return reverse === forward;
};


// Do not edit below this line
module.exports = palindromes;
