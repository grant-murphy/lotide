const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattened.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    }
  }
  return flattened;
};

module.exports = flatten;


// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

