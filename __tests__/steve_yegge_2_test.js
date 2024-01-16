const fibonacci = require('../steve_yegge_2')

describe('fibonacci', ()=> {
    // test to calculate the nth number of fibonacci
    test('should return the nth num of fib', ()=> {
        expect(fibonacci(5)).toBe(5)
    })

    // test to calculate the nth number of fibonacci
    test('should return the nth num of fib', ()=> {
        expect(fibonacci(8)).toBe(21)
    })

    //  test for 0th fibonacci number
    test('should return the 0th num of fib', ()=> {
        expect(fibonacci(0)).toBe(0)
    })

    //  test for 1st fibonacci number
    test('should return the 1st num of fib', ()=> {
        expect(fibonacci(1)).toBe(1)
    })

    //  test that an error message is returned for a negative number
    test('should return an error message for negative numbers', ()=> {
        expect(fibonacci(-1)).toBe('Error - Number is below zero')
    })
})