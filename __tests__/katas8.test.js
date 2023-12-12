const maxSequence = require('../katas_8');

describe('maxSequence', () => {
    // Test to calcuate the max sub of a subarray
    test('Test should return the max sum of a contingous subarray', () => {
        expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
    })

    // Test should ensure that numbers are not all negatives
    test('Test should return zero if all numbers are negative', () => {
        expect(maxSequence([-1,-1,-2,-4])).toBe(0);
    })

})