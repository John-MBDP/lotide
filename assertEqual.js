const assertEqual = function(actual, expected) {
  //check if actual is === to expected
  if (actual === expected) {
    return `🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`;
  } else {
    // if actual does not === to expected return a message
    return `✔✔✔ Assertion Failed: ${actual} !=== ${expected}`;
  }
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));