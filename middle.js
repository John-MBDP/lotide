"use strict";

// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION

const middle = (arr) => {
  let newArr = [];
  let lengthOfArr = arr.length;

  //If the given array is odd
  let odd = Math.floor(lengthOfArr / 2);

  //If the given array is even
  let even = Math.floor(lengthOfArr / 2);

  if (arr.length < 2) {
    return newArr;
  } else if (arr.length % 2 !== 0) {
    newArr.push(arr[odd]);
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[even - 1], arr[even]);
  }
  return newArr;
};

// Take the middle number of an array if(even)
// console.log(assertArraysEqual(middle([3, 3, 4, 5]), ([3, 4]))); // --> True

// // Take the middle number of an array if(odd)
// console.log(assertArraysEqual(middle([3, 3, 5]), ([3]))); // --> True

// Take the middle number of an array if(even)
console.log(assertArraysEqual(middle([3, 3, 4, 5]), [3, 4, 5])); // --> False

// Take the middle number of an array if(odd)
console.log(assertArraysEqual(middle([3, 3]), [3])); // --> False

//Return if the length of arr is less than 2
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

//Return the middle number of an odd array
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

//Return the middle number of an even array
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
