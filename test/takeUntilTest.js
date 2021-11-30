const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);

describe("#takeUntil", () => {
  it("should return [1, 2, 5, 7, 2] for results1", () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
});
