const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("it should return both equal arrays", () => [
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true),
  ]);
  it("it should return false", () => [
    assert.strictEqual(eqArrays([2, 3], [1, 2, 3]), false),
  ]);
});
