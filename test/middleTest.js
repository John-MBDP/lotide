const assertArrayEqual = require("../assertArrayEqual");
const eqArrays = require("../eqArrays");
const middle = require("../middle");

// Take the middle number of an array if(even)
// console.log(assertArraysEqual(middle([3, 3, 4, 5]), ([3, 4]))); // --> True

// // Take the middle number of an array if(odd)
// console.log(assertArraysEqual(middle([3, 3, 5]), ([3]))); // --> True

// Take the middle number of an array if(even)
console.log(assertArrayEqual(middle([3, 3, 4, 5]), [3, 4, 5])); // --> False

// Take the middle number of an array if(odd)
console.log(assertArrayEqual(middle([3, 3]), [3])); // --> False

//Return if the length of arr is less than 2
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

//Return the middle number of an odd array
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

//Return the middle number of an even array
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
