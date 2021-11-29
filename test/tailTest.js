const assertEqual = require("../assertEqual");
const tail = require("../tail");

console.log(assertEqual(tail([1, 2, 3]), [1, 2, 3]));
