// let eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   } return true;
// };

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log(`✅✅✅ The arrays [${array1}] and [${array2}] are equal.`);
//   } else {
//     console.log(`🛑🛑🛑 the arrays [${array1}]  and [${array2}] are not equal.`);
//   }
// };

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);

// console.log(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results1, ['E', 'A', 'D', 'G', 'B', 'E']);
// assertArraysEqual(results1, ['E', 'A', 'D', 'G', 'B', 'e']);
// REVISE TO ASSERT EQUAL

