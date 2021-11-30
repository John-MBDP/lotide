"use strict";

const assertEqual = require("./assertEqual");

const tail = function (tailOfAnArray) {
  let newArr = [];
  for (let i = 1; i < tailOfAnArray.length; i++) {
    newArr.push(tailOfAnArray[i]);
  }
  return newArr;
};

module.exports = tail;
