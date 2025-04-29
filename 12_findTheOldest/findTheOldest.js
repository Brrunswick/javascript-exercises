let oldest = 0
const year = new Date();

const findTheOldest = function(people) {
    for (i = 0; i < people.length; i ++) {
        if (people[i].yearOfDeath === undefined) {
            currentAge = year.getFullYear() - people[i].yearOfBirth;
        } else {
            currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if (currentAge > oldest) {
            oldest = currentAge;
        }
    }
    return getResult(people);
};

function getResult(people) {
    for (i = 0; i < people.length; i ++) {
        if (people[i].yearOfDeath === undefined) {
            currentAge = year.getFullYear() - people[i].yearOfBirth;
        } else {
            currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if (currentAge === oldest) {
            return people[i];
        }
    }
}
// Do not edit below this line
module.exports = findTheOldest;