const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number" || a < 0 || b < 0 || a % 1 != 0 || b % 1 != 0) {
        console.log(typeof a)
        return "ERROR"
    }
    let sum = 0
    const sortedArr = [a, b].sort((a, b) => a - b)
    a = sortedArr[0]
    b = sortedArr[1]
    for (let i = a; i <= b; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
