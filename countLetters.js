"use strict";

const countLetters = (str) => {
  const noSpaces = str.split(" ").join("").toLowerCase();
  const results = {};

  for (const letter of noSpaces) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
