// function solution(text, markers) {
//     let result = '';
//     const markersRegex = markers.length > 0 ? new RegExp(markers.map(marker => '\\' + marker).join('|'), 'g') : null;
//     const newLineRegex = /\n/g;

//     if (markers.length === 0) {
//         result = text.trimEnd();
//     } else if (text.search(newLineRegex) !== -1 || text.search(markersRegex) !== null) {
//         let n_indexes = getAllIndexes(text, newLineRegex);
//         let marker_indexes = getAllIndexes(text, markersRegex);

//         if (n_indexes.length === 0) {
//             result = text.slice(0, marker_indexes[0]);
//         } else {
//             // Handle cases with multiple newline characters and multiple markers
//             console.log('this is text:', text);
//             const lines = text.split('\n');
//             console.log('this is lines:', lines);
//             const processedLines = lines.map(line => processLine(line, markers));
//             console.log('this si processlines', processedLines);
//             result = processedLines.join('\n').trim();
//             console.log(result);
//         }
//     }

//     return result.trimEnd();
// }

// function getAllIndexes(text, regex) {
//     let indexes = [];
//     let match;

//     while ((match = regex.exec(text)) !== null) {
//         indexes.push(match.index);
//     }

//     return indexes;
// }

// function processLine(line, markers) {
//     const markersRegex = new RegExp(markers.map(marker => '\\' + marker).join('|'), 'g');
//     const markerIndex = line.search(markersRegex);

//     if (markerIndex !== -1) {
//         return line.slice(0, markerIndex).trim(); // Trim spaces from the end
//     }

//     return line.trim();
// }

// module.exports = solution;
