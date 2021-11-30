"use strict";

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArrayEqual");

const letterPositions = function (sentence) {
  const noSpaces = sentence.split(" ").join("").toLowerCase();
  const results = {};

  for (let i = 0; i < noSpaces.length; i++) {
    if (results[noSpaces[i]]) {
      results[noSpaces[i]].push(i);
    } else {
      results[noSpaces[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;
