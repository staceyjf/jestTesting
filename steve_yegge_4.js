const times_table = function(row, column) {
    // either row a zero
    if ( row === 0 || column === 0) {
        console.log('The output would be zero')
        return 'The output would be zero'
    // print row 1
    } else {

        function print_row(current_row, current_column) {
            if (current_row === 0) {
                return; // exit the recursion
            }

            let sum = current_row * current_column
            console.log(sum)

            if (current_column > 1) {
                print_row(current_row, current_column - 1) // enable it to move through the columns
            } else {
                print_row(current_row - 1, column) // reset column
            }
        }

        print_row(row, column)

    }
}

module.exports = times_table