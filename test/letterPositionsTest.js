const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

const results1 = letterPositions("hello");

describe("#letterPositions", () => {
  it("should return [0] for results1[h]", () => {
    assert.deepEqual(results1["h"], [0]);
  });
});
