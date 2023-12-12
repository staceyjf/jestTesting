function DNAStrand(dna){
if (dna == "") {
  return null
}
 let results = []
 const DNA_dic = {
  'A' : 'T', 
  'T': 'A', 
  'C': 'G', 
  'G': 'C'}
  let DNA_Arr = (dna.toUpperCase()).split('')
  DNA_Arr.forEach((char) => {
    for ( key in DNA_dic) {
      if (key === char) {
        results.push(DNA_dic[key])
      } 
    } 
  })
  return results.join("")
}

// reduced code option
// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }


// using replace method
// function DNAStrand(dna){
//   return dna.replace(/[ATCG]/g, function(char) { // the global flag ensures that they all get replaced
//     return DNAStrand.pairs[char]
//   })
// }

// DNAStrand.pairs = {'A':'T','T':'A','C':'G','G':'C'};


module.exports = { DNAStrand };