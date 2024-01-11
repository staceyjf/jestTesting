const topThreeWords = require('../katas_13')

describe('topThreeWords', () => {
    // test to rank order and return an array of top 3 most frequenct strings
    test('this test should return an array of strings in descending order', ()=> {
        expect(topThreeWords("a a a  b  c c  d d d d  e e e e e")).toEqual(['e','d','a'])
    })

    // test to see if it hands case-insensitivity
    test('this test should handle case-insensitivity', ()=> {
        expect(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")).toEqual(['e','ddd','aa'])
    })

    // test to see if it ignores other charcters
    test('this test should handle non-letters', ()=> {
        expect(topThreeWords("  //wont won't won't ")).toEqual(["won't", "wont"])
    })

    // test to see if it handles less than 3 unique words
    test('this test should handle non-letters', ()=> {
        expect(topThreeWords("  , e   .. ")).toEqual(["e"])
    })

    // test to see if it handles no strings
    test('this test should handle non-letters', ()=> {
        expect(topThreeWords("  '  ")).toEqual([])
    })
})