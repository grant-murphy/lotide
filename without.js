const without = function(source, itemsToRemove) {
  let results = [];
  let found = false;
  
  for(let i = 0; i < source.length; i++) {
    found = false;
    for(let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] === itemsToRemove[j]) {
        found = true
      }      
    } 
    if(found === false) {
      results.push(source[i]);
    }
  } return results;
} 

console.log(without(['1', "2", "3"], [1, 2, "3"]))