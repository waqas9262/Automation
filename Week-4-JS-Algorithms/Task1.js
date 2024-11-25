// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.
// Usage examples:
// console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
// console.log(findLongestString(["one", "two", "three"])); // "three"
// console.log(findLongestString(["1", "22", "333"])); // "333"

function findLongestString(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i];
    }
  }
  return longest;
}

console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"
