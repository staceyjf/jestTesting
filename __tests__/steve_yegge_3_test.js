const times_table = require('../steve_yegge_3')

describe('times_table', ()=> {
    // setting up a mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    beforeEach(() => {
        // Clear the console log spy before each test
        consoleLogSpy.mockClear();
    });

    // test to print the times table up to 12x12
    test('should return a print out of the 12x12 times table', ()=> {
        // call the function with row and column inputs
        times_table(12,12);
        // test based on the num of console.log outputs
        expect(consoleLogSpy).toHaveBeenCalledTimes(144); // 12 rows x 12 columns
    })

    // test to handle if either number is zero
    test('should return zero if either param is a zero', ()=> {
        expect(times_table(0, 12)).toEqual('The output would be zero');
})
})