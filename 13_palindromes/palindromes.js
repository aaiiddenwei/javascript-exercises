const palindromes = function (str) {
    str = str.replace(/[^a-zA-z0-9]/g, "").toLowerCase()
    if (str.length === 0 || str.length === 1) {
        return true
    } 
    return str.at(0) === str.at(-1) && palindromes(str.slice(1, str.length - 1))
};

// Do not edit below this line
module.exports = palindromes;
