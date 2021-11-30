"use strict";

const eqArrays = require("./eqArrays");

// Takes in two arrays and checks if they're both equal
const assertArraysEqual = function (arg1, arg2) {
  if (eqArrays(arg1, arg2)) {
    return `✅✅✅ Assertation Passed: ${arg1} === ${arg2}`;
  } else {
    return `🔴🔴🔴 Assertation Failed: ${arg1} !== ${arg2}`;
  }
};

module.exports = assertArraysEqual;
