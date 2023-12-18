function productFib(prod) {
    let fib_num_1 = 0;
    let fib_num_2 = 1;

    while (fib_num_1 * fib_num_2 < prod) {
        const temp = fib_num_2;
        fib_num_2 = fib_num_1 + fib_num_2;
        fib_num_1 = temp;
    }

    const result = fib_num_1 * fib_num_2;
    const answer = [fib_num_1, fib_num_2, result === prod];

    return answer;
}

  module.exports = productFib