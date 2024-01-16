// fibonacci numbers 0, 1, 1, 2, 3, 5, 8, 13, 21
// nth number        0, 1, 2, 3, 4, 5, 6, 7,  8

const fibonacci = function(n) {
    // if n is a negative
    if (n < 0) {
        return 'Error - Number is below zero'
        // if n is less than 2
    } else if (n < 2) {
        return n
    // for all other cases 2+
    } else {
        let result = fibonacci(n - 1) + fibonacci(n - 2)
        return result
    }
}

module.exports = fibonacci