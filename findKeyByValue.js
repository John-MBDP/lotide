const assertEqual = function(actual, expected) {
  //check if actual is === to expected
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`;
  } 
 // if actual does not === to expected return a message
  return `✔✔✔Assertion Passed: ${actual} === ${expected}`;
};


// check if the value is equal to the key
// if it is return that key
//
const findKeyByValue = (obj, val) => {
  for(const key in obj) {
    if(obj[key] === val) {
      return key;
    }
  }
}

console.log(findKeyByValue({ 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}, "The Wire"))



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));