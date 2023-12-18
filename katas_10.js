function solution(str) {
    str = str.length % 2 !== 0 ? str + '_' : str
    let result = []
    let char_arr = []

    str.split('').forEach((char, index) => {
        char_arr += char;

        if ((index + 1) % 2 === 0) {
            result.push(char_arr);
            char_arr = '';
        }
    });

    return result
}

module.exports = solution;