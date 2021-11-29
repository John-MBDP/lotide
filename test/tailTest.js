const assert = require("chai").assert;
const tail = require("../tail");

describe("tail", () => {
  it("it should return the tail of an array [2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});
