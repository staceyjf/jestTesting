const { isPangram } = require('../katas_5');

describe('isPangram', () => {
    // should return true for a pangram
    test('should return true if a pangram.', () => {
        expect(isPangram('The quick brown fox jumps over the lazy dog')).toBeTruthy();
    });

    test('should return false if it is not a pangram.', () => {
        expect(isPangram('This is not a pangram')).toBeFalsy();
    });
});
