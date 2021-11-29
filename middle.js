"use strict";
const assertArrayEqual = require("./assertArrayEqual");
const eqArrays = require("./eqArrays");

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

module.exports = middle;
