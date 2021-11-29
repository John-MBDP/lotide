const assert = require("chai").assert;
const eqArrays = require("../eqArrays");
const middle = require("../middle");

describe("#middle", () => {
  it("it should take the  middle number of an array if even", () => {
    assert.deepEqual(middle([3, 3, 4, 5]), [3, 4]);
  });
  it("it should take the  middle number of an array if odd", () => {
    assert.deepEqual(middle([3, 3, 4]), [3]);
  });
});
