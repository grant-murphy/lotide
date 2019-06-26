const middle = function(arr) {
  let result = [];
  if (arr.length === 1 || arr.length === 2) {
    return result;
  } else if (arr.length % 2 === 1) {
    result.push(arr[Math.floor(arr.length / 2)]);
  } else {
    result.push(arr[(Math.floor(arr.length / 2)) - 1])
    result.push(arr[Math.floor(arr.length / 2)])

  }
  return result;
}


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

