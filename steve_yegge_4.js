const fs = require('fs').promises;

const sum_of_textinput = async function(nums) {
    let file;
    let sum = 0;

    try {
        file = 'textfile.txt'; 
        await fs.writeFile(file, nums); // write to a file. once is created if it doesn't exist

        // read the file
        const content = await fs.readFile(file, 'utf8'); // read the file - outputs are strs
        const num_arr = content.split('\n'); // convert to array

        // convert the elements to numbers and add them to sum
        num_arr.map((str_int) => {
            sum += Number(str_int);
        });
        
        return sum;
    } catch (err) {
        console.log(err);
    } 

    return sum;
};

module.exports = sum_of_textinput;
