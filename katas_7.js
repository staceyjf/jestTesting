function narcissistic(value) {
  // your implementation here
  let nums_arr = value.toString().split("")
  let total = 0
  nums_arr.map((num_str) => {
    total += Number(num_str) ** nums_arr.length
    return total
  })
  return total === value ? true : false
}

module.exports = narcissistic;