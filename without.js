"use strict";
const eqArrays = require("./eqArrays");
const assertArrayEqual = require("./assertArrayEqual");

const without = (args1, args2) => {
  let withoutItems = [];
  for (let i = 0; i < args1.length; i++) {
    if (args2[i] !== args1[i]) {
      withoutItems.push(args1[i]);
    }
  }
  return withoutItems;
};

module.exports = without;
