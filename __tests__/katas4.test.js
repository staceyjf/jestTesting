const { DNAStrand } = require('../katas_4')

  /* --------------------- Test 3 ---------------------------------------------------*/
  describe('DNAStrand', () => {
    // Returns the equivalent DNA matching
    test('should return the complementary DNA symbol', () => {
      expect(DNAStrand('AAAA')).toBe('TTTT');
    });
    
    // Test to check if the function returns NULL when the string is empty
    test('should return NULL if string is empty', () => {
      expect(DNAStrand('')).toBeNull();
    });

  // // Test to check if an error is thrown for a negative value
  // test('should throw an error when a negative value is given', () => {
  //   expect(() => DNAStrand(-1)).toThrowError("Invalid input");
  // });

  });