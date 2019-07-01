const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
        
        return false;
        
      } else if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
        
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;



// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false