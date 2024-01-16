const times_table = function(row, column) {
    // if either is zero
    if (row === 0 || column === 0) {
        console.log(0)
        return 'The output would be zero'
    // for 1+
    } else {

        // recursive function
        function print_row(current_row,current_column){
            if (current_row === 0 ) {
                return // exit condition for the recursive
            }

            let sum = current_row * current_column
            console.log(sum)

            if (current_column > 1) { // needs to be one as this would replace current_column at 1
                print_row(current_row, current_column - 1)
            } else {
                print_row(current_row - 1, column)
            }
        }

        // call to invoke
        print_row(row, column)

    }

}

module.exports = times_table

