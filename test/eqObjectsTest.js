const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

const test1 = { c: "1", d: ["2", 3] };
const test2 = { c: "1", d: ["2", 3] };

const ab = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };

describe("#eqObjects", () => {
  it("it should return both equal arrays", () => [
    assert.strictEqual(eqObjects(test1, test2), true),
  ]);
  it("it should return false for ab and abc", () => [
    assert.strictEqual(eqObjects(ab, abc), false),
  ]);
});
