const eqArrays = (test1, test2) => {

  // check if the array lengths are different
  if (test1.length !== test2.length) return false;

for (let i = 0; i < test1.length; i++) {
  //if test[i] does not equal return false
  if ((test1[i] !== test2[i])) {
    return false;
  }
}
return true;
};



// Takes in two arrays and checks if they're both equal
const assertArraysEqual = (arg1, arg2) => {
  return `${eqArrays(arg1, arg2)}`
};


// Returns a new array without the element that equals to args1 && args2
const without = (args1, args2) => {
  let withoutItems = [];
  for(let i = 0; i < args1.length; i++) {
    if(args2[i] !== args1[i]) {
      withoutItems.push(args1[i]);
    }
  }
  return withoutItems;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
//test case
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
