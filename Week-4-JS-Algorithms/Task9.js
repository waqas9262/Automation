// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.
// Usage examples:
// console.log(findLongestWord('The quick brown fox')); // 5
// console.log(findLongestWord('Hello world')); // 5
// console.log(findLongestWord('')); // 0
// console.log(findLongestWord('OneWord')); // 7

function findLongestWord(sentence) {
  let word = sentence.split(" ");
  let longest = [0];

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longest) {
      longest = word[i].length;
    }
  }
  return longest;
}

console.log(findLongestWord("The quick brown fox")); // 5
console.log(findLongestWord("Hello world")); // 5
console.log(findLongestWord("")); // 0
console.log(findLongestWord("OneWord")); // 7
