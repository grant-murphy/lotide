// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌: ${actual} !== ${expected}`);
//   }
// };

function findKeyByValue(object, value) {
  let results;

  for (const key in object) {
    if (object[key] === value) {
      results = key;
      // console.log(object, key, value);
    }
  }
  return results;
}

module.exports = findKeyByValue;


// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// return Object.keys(object).find(key => object[key] === value);