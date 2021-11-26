const eqArrays = (test1, test2) => {
  // check if the array lengths are different
  if (test1.length !== test2.length) return false;

  for (let i = 0; i < test1.length; i++) {
    //if test[i] does not equal return false
    if (test1[i] !== test2[i]) {
      return false;
    }
  }
  return true;
};

// Takes in two arrays and checks if they're both equal
const assertArraysEqual = function (arg1, arg2) {
  if (eqArrays(arg1, arg2)) {
    return `✅✅✅ Assertation Passed: ${arg1} === ${arg2}`;
  } else {
    return `🔴🔴🔴 Assertation Failed: ${arg1} !== ${arg2}`;
  }
};

const letterPositions = function (sentence) {
  const noSpaces = sentence.split(" ").join("").toLowerCase();
  const results = {};

  for (let i = 0; i < noSpaces.length; i++) {
    if (results[noSpaces[i]]) {
      results[noSpaces[i]].push(i);
    } else {
      results[noSpaces[i]] = [i];
    }
  }
  return results;
};

const result1 = letterPositions("hello");

//Test Case
console.log(assertArraysEqual(result1.h, [1]));
