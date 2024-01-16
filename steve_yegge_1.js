const reverse_str = function(input_str) {
    return isNaN(input_str) ? input_str.split('').reverse().join('') : 'Input is not a string';
};

module.exports = reverse_str;