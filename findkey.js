const assertEqual = function (actual, expected) {
  //check if actual is === to expected
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`;
  }
  // if actual does not === to expected return a message
  return `✔✔✔Assertion Passed: ${actual} === ${expected}`;
};

const findKey = function (obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const results1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

console.log(assertEqual(results1, "noma"));
