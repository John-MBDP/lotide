const assertEqual = function(actual, expected) {
  //check if actual is === to expected
  if (actual === expected) {
    return `🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`;
  } else {
    // if actual does not === to expected return a message
    return `✔✔✔ Assertion Failed: ${actual} !=== ${expected}`;
  }
};


const tail = function(tailOfAnArray) {
  let newArr = [];
  for (let i = 1; i < tailOfAnArray.length; i ++) {
    newArr.push(tailOfAnArray[i]);
  }
  return newArr;
};

// console.log(assertEqual(tail(["Hello", "testing", "Lighthouse"]), "Hello"));


//workaround

const result = tail(["testing", "LightHouse", "Labs"]);

console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], "LightHouse"));
console.log(assertEqual(result[1], "Labs"));

//Test case: Checks the original array
const words = ["testing", "LightHouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(words.length, 3));