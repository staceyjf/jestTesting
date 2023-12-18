function findOdd(A) {
  const count = A.reduce((acc, num) => {
    if (typeof(num) == "number") {
      acc[num] = acc[num] ? acc[num] + 1 : 1;
      return acc
    } else{
      return undefined
    }
   
  }, {})
   
  for (let key in count) {
    if (count[key] % 2 != 0) {
      return Number(key)
    }
  }

}

  module.exports = { findOdd };