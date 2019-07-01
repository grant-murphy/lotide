// const tail = require('../tail');
// const assertEqual = require('../assertEqual')

// const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 'Lighthouse Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns '4, 3, 2, 1, 0' for [5, 4, 3, 2, 1, 0]", () => {
    assert.deepEqual(tail([5, 4, 3, 2, 1, 0]), [4, 3, 2, 1, 0]);
  });
});