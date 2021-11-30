"use strict";
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArrayEqual");

const takeUntil = function (array, callback) {
  let results = [];
  for (const value of array) {
    if (!callback(value)) {
      results.push(value);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;
