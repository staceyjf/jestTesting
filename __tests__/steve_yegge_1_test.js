const reverse_str = require('../steve_yegge_1')

describe('reverse_str', ()=> {
    // simple test will reverse an input string
    test('should return a string input in reserve order', ()=> {
        expect(reverse_str('hello')).toBe('olleh')
    })

    // test more than one word
    test('should preserve whitespace with string with more than one word', ()=> {
        expect(reverse_str('hello world')).toBe('dlrow olleh')
    })

    // test numerical values
    test('return an error if numerical values are used', ()=> {
        expect(reverse_str(1)).toBe('Input is not a string')
    })
})