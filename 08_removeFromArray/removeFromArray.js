const removeFromArray = function(arr, ...remove) {
    for (let el of remove) {
        while (arr.includes(el)) {
            arr.splice(arr.indexOf(el), 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
