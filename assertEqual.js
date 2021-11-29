const assertEqual = function(actual, expected) {
  //check if actual is === to expected
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`;
  }
  // if actual does not === to expected return a message
  return `✔✔✔Assertion Passed: ${actual} === ${expected}`;
};

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));

module.exports = assertEqual;
