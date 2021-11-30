"use strict";

const assertEqual = require("./assertEqual");

const flatten = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    //checks if the arr[i] is an array or not.  if not go to the else
    if (Array.isArray(arr[i])) {
      for (let k = 0; k < arr[i].length; k++) {
        output.push(arr[i][k]);
      }
    } else {
      output.push(arr[i]);
    }
  }
  return output;
};

module.exports = flatten;
