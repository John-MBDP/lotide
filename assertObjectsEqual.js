"use strict";
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

const eqObjects = (object1, object2) => {
  let object1KeyArray = Object.keys(object1);
  let object2KeyArray = Object.keys(object2);

  if (object1KeyArray.length !== object2KeyArray.length) {
    return false;
  } else {
    for (const keyName of object1KeyArray) {
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
        if (!eqArrays(object1[keyName], object2[keyName])) {
          return false;
        }
      } else {
        if (object1[keyName] !== object2[keyName]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = function (inputObject, expectedObject) {
  const inspect = require("util").inspect;
  if (eqObjects(inputObject, expectedObject)) {
    console.log(
      `✅ Assertation Passed: ${inspect(inputObject)} === ${inspect(
        expectedObject
      )}`
    );
  } else {
    console.log(
      `🔴 Assertation Failed: ${inspect(inputObject)} !== ${inspect(
        expectedObject
      )}`
    );
  }
};

console.log(
  assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3] })
);
