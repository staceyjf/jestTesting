const { findOdd } = require('../kata_2');

describe('findOdd', () => {
  // Test to find the odd number count
  test('should return the int that has an odd count', () => {
    expect(findOdd([1, 1, 2])).toBe(2);
  });

});
