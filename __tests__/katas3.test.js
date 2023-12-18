const { isSquare } = require('../katas_3')

  /* --------------------- Test 3 ---------------------------------------------------*/
  describe('isSquare', () => {
    // Test to check if a number is a perfect square
    test('should return true for a perfect square', () => {
      expect(isSquare(25)).toBe(true);
    });
    
    // Test to check if a number is a not perfect square
    test('should return false is not a perfect square', () => {
      expect(isSquare(26)).toBe(false);
    });

  // // Test to check if an error is thrown for a negative value
  // test('should throw an error when a negative value is given', () => {
  //   expect(() => isSquare(-1)).toThrowError("Invalid input");
  // });

  });