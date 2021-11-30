const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const result1 = findKeyByValue(bestTVShowsByGenre, "The Wire");

const result2 = findKeyByValue(
  (bestTVShowsByGenre, "That '70s Show"),
  undefined
);
describe("#findKeyByValue", () => {
  it("it should return True property drama", () => [
    assert.strictEqual(result1, "drama"),
  ]);
  it("it should return undefined", () => [
    assert.strictEqual(result2, undefined),
  ]);
});
