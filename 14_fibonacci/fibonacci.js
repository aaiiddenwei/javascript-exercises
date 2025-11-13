const fibonacci = function(index) {
    if (typeof index === "string") {
        index = parseInt(index)
    }
    if (index === 0) {
        return 0
    }
    if (index < 0) {
        return "OOPS"
    }
    if (index === 1) {
        return 1
    }
    return fibonacci(index - 2) + fibonacci(index - 1)
};

// Do not edit below this line
module.exports = fibonacci;
