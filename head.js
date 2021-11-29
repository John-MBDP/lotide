const assertEqual = require("./assertEqual");

const head = function (firstElement) {
  for (let i = 0; i < firstElement.length; i++) {
    return firstElement[0];
  }
};

module.exports = head;
