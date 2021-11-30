"use strict";

const assertEqual = require("./assertEqual");

const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //itemsToCount["karl"] --> returns false --> return results
    //itemsToCount["Fang"] --> returns true
    if (itemsToCount[item]) {
      //if it already exists add + 1 to the value
      if (results[item]) {
        // if karl exists in the results
        results[item] += 1;
        //Run else if the results[item] does not exist and add a value to it
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
