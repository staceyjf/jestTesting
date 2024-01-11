// const solution = require('../katas_12');

// describe('solution', () => {
//     // Test to ensure text is stripped out following one marker
//     test('should remove text after one marker', () => {
//         expect(solution('bananas !apples', ['!'])).toEqual('bananas');
//     });

//     // Test to ensure text is stripped out with more than one marker
//     test('should remove text after multiple markers', () => {
//         expect(solution('apples, pears # and bananas', ['#'])).toEqual('apples, pears');
//     });
    
//     // Test to ensure text remains unchanged when there are no markers
//     test('should keep text unchanged with no markers', () => {
//         expect(solution(' grapes', [])).toEqual(' grapes');
//     });

//     test('should keep text post an escape marker if marker is before  /n', () => {
//         expect(solution('#dd ee\nzz yy', ['#'])).toEqual('\nzz yy');
//     });

//     test('should keep text post an escape marker if marker is after /n', () => {
//         expect(solution('aa bb\ncc #dd', ['#'])).toEqual('aa bb\ncc');
//     });
    
//     test('should handle /n and multiple markers', () => {
//         expect(solution('aa + bb\ncc - dd\nee * ff', ['+', '-', '*'])).toEqual('aa\ncc\nee');
//     });

//     test('should handle /n straight before marker while still including /n', () => {
//         expect(solution('aa # bb\ncc dd', ['#'])).toEqual('aa\ncc dd');
//     });

//     test('should handle /n straight before marker while still including /n', () => {
//         expect(solution('aa bb\n#cc dd', ['#'])).toEqual('aa bb\n');
//     });
// });