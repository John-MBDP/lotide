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

const assertArraysEqual = function (arg1, arg2) {
  if (eqArrays(arg1, arg2)) {
    return `✅✅✅ Assertation Passed: ${arg1} === ${arg2}`;
  } else {
    return `🔴🔴🔴 Assertation Failed: ${arg1} !== ${arg2}`;
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function (array, callback) {
  let results = [];
  for (const value of array) {
    if (!callback(value)) {
      results.push(value);
    } else {
      return results;
    }
  }
  return results;
};

// Test Case 1
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

// Test Case 2
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2])); //Passed
