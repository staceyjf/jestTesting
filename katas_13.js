function topThreeWords(text) {
    let result = []

    // stripping the string
    const lower = text.toLowerCase()
    const stripped_commas = lower.replace(/'(?!([a-z]|s\b))/gm, "")
    const stripped_str = stripped_commas.replace(/[^a-z\s\']/gm, "")

    // turning into an array
    const word_arr = (stripped_str).split(" ")
 
    // creating a tally dictionary
    const count = word_arr.reduce((acc,word) => {
        const tally = Object.values(acc)
        if (word) {
            acc[word] = (acc[word] || 0) + 1;
        }
        return acc
    }, {})

    
    let top_word, second_word, third_word;
    let top_word_count = 0, second_word_count = 0, third_word_count = 0;

    // unpacking and identifying top words
    for (const [key,value] of Object.entries(count)) {

        if (value > top_word_count) { 
            third_word = second_word;
            second_word = top_word;
            top_word = key;
            third_word_count = second_word_count;
            second_word_count = top_word_count;
            top_word_count = value;
        } else if (value > second_word_count) {
            third_word = second_word;
            second_word = key;
            third_word_count = second_word_count;
            second_word_count = value;
        } else if (value > third_word_count) {
            third_word = key;
            third_word_count = value;
        } 

    }

    //filtering out the underdefined
    function helper(...words) {
        result.push(...words.filter(word => word));
    }
    
    helper(top_word, second_word, third_word);

    return result;
}

module.exports = topThreeWords;