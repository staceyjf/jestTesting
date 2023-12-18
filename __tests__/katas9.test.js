const productFib = require('../katas_9')

describe ('productFib', () => {
    // Test should return true for a Fib product in an array with the two Fib numbers
    test('Should return true with the relevant product numbers', () => {
        expect(productFib(714)).toEqual([21, 34, true])
    }) 

    // Test should return a false if the product does not equal the sum of Fin numbers
    test('Should return false if the product does not equal the sum of the two Fib numbers', () => {
        expect(productFib(800)).toEqual([34, 55, false])
    }) 
})