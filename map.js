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
    console.log(`✅ Assertation Passed: ${arg1} === ${arg2}`);
  } else {
    console.log(`🔴 Assertation Failed: ${arg1} !== ${arg2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
