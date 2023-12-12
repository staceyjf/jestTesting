function findOdd(A) {
  return A.reduce((acc, curr) => acc ^ curr, 0);
}

module.exports = { findOdd };