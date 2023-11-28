/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {
    // Your code here
    let words = sentence.split(' ');

    let maxWord = words.reduce((max, word) => {
        if (longest(word) > max.length) {
            return word;
        } else {
            return max;
        }
    }, "");


    return maxWord;
};

// Your code here
let longest = function(word){
    let strings = word.split('')
    let count = 0;
    strings.forEach(str => {
        count++
    })

    return count;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
