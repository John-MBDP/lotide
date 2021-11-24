// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const assertEqual = function(actual, expected) {
  //check if actual is === to expected
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`;
  } 
 // if actual does not === to expected return a message
  return `✔✔✔Assertion Passed: ${actual} === ${expected}`;
};


const countLetters = (str) => {
  const noSpaces = str.split(" ").join('').toLowerCase();
  const results = {};

  for(const letter of noSpaces) {
    if(results[letter]) {
      results[letter] += 1;
  } else {
    results[letter] = 1;
  }
}
  return results;
}
result1 = countLetters("lighthouse in the house");

console.log(result1["h"]);

console.log(assertEqual(result1["h"], 4));