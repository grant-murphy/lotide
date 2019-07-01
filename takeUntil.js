const takeUntil = function(array, callback) {
  const numbers = [];
  for (let num of array) {
    if (callback(num)) {
      break;
    }
    numbers.push(num);
  }

  return numbers;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);



// console.log(takeUntil([1,2,-3,4, -5, 5], x => x < 0))