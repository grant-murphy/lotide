//NOT FINISHED

let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
}



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    
  }
  return results;
}

const results1 = map(words, word => word[0]);

console.log(eqArrays(results1, ['g','1','t','m','t']))
// REVISE TO ASSERT EQUAL

