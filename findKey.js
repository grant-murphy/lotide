// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"


// const findKey = function(obj, fun) {
//   for(let key in obj) {
//     if(fun(obj[key])) {
//       return key;
//     }
//   }
// }

const findKey = function(obj, fun) {
  const multKeys = [];
  for (let key in obj) {
    if (fun(obj[key])) {
      multKeys.push(key);
      return multKeys;
      //console.log('OBJ & KEY: ' + JSON.stringify(obj[key]))
    }
  }
  //return multKeys;
};

module.exports = findKey;

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)); // => "noma"