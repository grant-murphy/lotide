// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual')

// assertArraysEqual([1, 2, 3], [1, 2, 3]);// => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]);// => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// => false

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [3] for [5, 4, 3, 2, 1]", () => {
    assert.deepEqual(middle([5, 4, 3, 2, 1]), [3]);
  });
});