// function descendingOrder(n) {

//     if (typeof(n) === typeof(1)) {
//         const numArr = n.toString().split("");
//         let result = [];
  
//         while (numArr.length > 0) {
//             let maxIndex = 0;

//             for (let i =0; i < numArr.length; i++) {
//                 if (numArr[i] > numArr[maxIndex]) {
//                     maxIndex = i;
//                 }
//             }
    
//         result.push(numArr[maxIndex]); // push at the end the new max element
//         numArr.splice(maxIndex, 1); // splice one element at index 'maxIndex'
//         }
    
//         return Number(result.join(""));

//     } else{
//         return undefined
//     }
    
//   }
  
function descendingOrder(n) {
    if (typeof n === 'number' && !isNaN(n) && n > 0) {
      return Number(String(n).split("").sort().reverse().join(""));
    } else {
      throw new Error('Invalid input');
    }
  }
  
  module.exports = { descendingOrder };