const narcissistic = require('../katas_7');

describe('narcissistic', () => {
    // should return true 
    test('should return true if an Armstrong Number', () => {
        expect(narcissistic(153)).toBe(true);
    });

    // should return false 
    test('should return false if not an Armstrong Number', () => {
        expect(narcissistic(1652)).toBe(false);
    });
});