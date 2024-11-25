// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.
// Usage examples:
// console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
// console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
// console.log(findDollarStrings(["no", "dollars", "here"])); // []


function findDollarStrings(str) {
   let result = [];
   for (let i = 0; i < str.length; i++) {
    if (str[i].includes("$")) {
        result.push(str[i]);
    }
    
   }
   return result;
}

console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []