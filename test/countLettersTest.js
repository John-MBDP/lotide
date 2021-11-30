const countLetters = require("../countLetters");
const assert = require("chai").assert;

const test1 = countLetters("lighthouse in the house");

describe("#countLetters", () => {
  it("it should return the exact amount of letters with no spaces", () => {
    assert.strictEqual(test1["i"], 2);
  });
});
