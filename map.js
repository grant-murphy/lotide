// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌: ${actual} !== ${expected}`);
//   }
// };


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    
  }
  return results;
}

const results1 = map(words, word => word[0]);


// REVISE TO ASSERT EQUAL

