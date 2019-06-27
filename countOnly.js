// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

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
    console.log(item);
  }
  console.log(results)
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const names = {
  "Jason": true, "Karima": true, "Fang": true
};

const result1 = countOnly(firstNames, names);

assertEqual(result1["Jason"], undefined);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);


firstName = ['Kendall', 'Grant'];

for(let i = 0; i < firstName.length; i++) {
  firstName[i]
}

for (const name of firstName) {
  name
}