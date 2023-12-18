// const { descendingOrder } = require('../katas_1')
const { findOdd } = require('../kata_2')

/* matchers    
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false
toBeGreaterThan or toBeLessThan for number value comparisons
toMatch accepts a Regex pattern to match a string output
toContain can be used to see if a value is contained in an Array */

  /* --------------------- Test 1 ---------------------------------------------------*/
// describe('descendingOrder', () => {
//     // Test if non-numerical values are being used
//     test('should throw an error for non-numerical input', () => {
//         expect(() => descendingOrder("A")).toThrowError('Invalid input');
//       });

//     // rejects a negative number
//     test('should throw an error when a negative value is given', () => {
//         expect(() => descendingOrder(-123)).toThrow("Invalid input");
//         });

//     // Test if it can take a number and reorder it
//     test('should return positive integers in descending order', () => {
//       expect(descendingOrder(123456789)).toBe(987654321);
//     });
//   });

  /* --------------------- Test 2 ---------------------------------------------------*/
  describe('findOdd', () => {
    // Test to find the odd number count
    test('should return the int that has an odd count', () => {
      expect(findOdd([1, 1, 2])).toBe(2);
    });
  
  });