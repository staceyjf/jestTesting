const sum_of_textinput = require('../steve_yegge_4'); // Adjust the path accordingly
const fs = require('fs').promises;

describe('sum_of_textinput', () => {
    test('should return the sum of ints provided as parameters', async () => {

        let input = '1\n2\n3'

        // call the function
        const result = await sum_of_textinput(input);

        // Assert the sum of provided numbers
        expect(result).toBe(6);
    });
});
