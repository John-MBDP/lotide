const assertEqual = function(actual, expected) {
  //check if actual is === to expected
  if (actual === expected) {
    return `🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`;
  } else {
    // if actual does not === to expected return a message
    return `✔✔✔ Assertion Failed: ${actual} !=== ${expected}`;
  }
};

const head = function(firstElement) {
  for (let i = 0; i < firstElement.length; i++) {
    return firstElement[0];
  }
}

console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));


