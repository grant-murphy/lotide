

const flatten = function(array) {
var flattened=[];
for (var i = 0; i < array.length; i++) {
if(!Array.isArray(array[i])) {
  flattened.push(array[i]) ;
} else {
 for(var j = 0; j < array[i].length; j++) {
  flattened.push(array[i][j]);
  } 
  }
 } 
 return flattened;
}



console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

