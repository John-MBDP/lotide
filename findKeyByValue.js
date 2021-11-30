"use strict";
const assertEqual = require("./assertEqual");
// check if the value is equal to the key
// if it is return that key
//
const findKeyByValue = (obj, val) => {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
