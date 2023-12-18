const solution = require('../katas_10')

describe('solution', () => {
    //this test should return a string into paris of two chars
    test('should return string into two chars', () => {
        expect(solution('abcdef')).toEqual(['ab', 'cd', 'ef'])
    })

    //this test should a _ for odd string counts
    test('should return string into two chars', () => {
        expect(solution('abc')).toEqual(['ab', 'c_'])
    })
})