// FUNCTION IMPLEMENTATION
const countLetters = function(letterCount) {
  const results = {};
  
  for (let i = 0; i < letterCount.length; i++) {
    
    if (results[letterCount[i]]) {
      results[letterCount[i]].push(i);
    } else {
      results[letterCount[i]] = [i];
    }
  }
  return results;
};

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"))