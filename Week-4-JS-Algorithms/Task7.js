// Challenge 7: Convert Numbers to Strings
// Write a function that converts all numbers to strings.
// Usage examples:
// console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
// console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
// console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]

function convertNumbersToStrings(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    let stringVersion = num[i].toString();
    result.push(stringVersion);
  }

  return result;
}

console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]
