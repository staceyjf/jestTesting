var isSquare = function(n){
  if (n < 0 || typeof(n) != 'number' ) {
   throw new Error ('Invalid input')
  } else if (n === 0) {
    return true
  } else {
    for (let i=1; i <= n; i++) {
      if (i ** 2 === n) {
        return true 
      }
    }
    return false;
  } 
}

module.exports = { isSquare };