const assert = require("chai").assert;
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
const expectedResults = ["g", "c", "t", "m", "t"];

describe("#map", () => {
  it("should return [ 'g', 'c', 't', 'm', 't' ] for results1", () => {
    assert.deepEqual(results1, expectedResults);
  });
});
