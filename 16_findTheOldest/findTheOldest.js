const findTheOldest = function(people) {
    return people.reduce((oldest, current) => ("yearOfDeath" in oldest? oldest.yearOfDeath : new Date().getFullYear()) - oldest.yearOfBirth >= ("yearOfDeath" in current ? current.yearOfDeath : new Date().getFullYear()) - current.yearOfBirth ? oldest : current)
};

// Do not edit below this line
module.exports = findTheOldest;
