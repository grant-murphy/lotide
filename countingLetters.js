// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letterCount) {
  const results = {};
  
  for (const item of letterCount) {   
    
      if(results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    
  return results;
}


console.log(countLetters("lighthouse in the house"))