const { openOrSenior } = require('../katas_6');

describe('openOrSenior', () => {
    // should return open for all 4 members
    test('this open for all members', () => {
        expect(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])).toEqual(['Open', 'Open', 'Open', 'Open']);
    });

    // should return senior for members above 55+ and handicap 7+
    test('this open for all members', () => {
        expect(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])).toEqual(['Open', 'Senior', 'Open', 'Senior']);
    });
});