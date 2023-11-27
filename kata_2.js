function findOdd(A) {
  const count = A.reduce((acc, num) => {
    if (typeof(num) == "number") {
      acc[num] = acc[num] ? acc[num] + 1 : 1;
      console.log(acc)
      return acc
    } else{
      return undefined
    }
   
  }, {})
  
  console.log('this is count', count)
 
  for (let key in count) {
    if (count[key] % 2 != 0) {
      return Number(key)
    }
  }

}

  module.exports = { findOdd };