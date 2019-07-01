// const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const names = {
//   "Jason": true, "Karima": true, "Fang": true
// };

// const result1 = countOnly(firstNames, names);


// console.log(result1["Jason"], 1)
// assertEqual(result1["Jason"], undefined);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);


// firstName = ['Kendall', 'Grant'];

// for(let i = 0; i < firstName.length; i++) {
//   firstName[i]
// }

// for (const name of firstName) {
//   name
// }