// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log('❌❌❌: ' + actual + ' !== ' + expected);
  } else {
    console.log('✅✅✅: ' + actual + ' === ' + expected);
  }
};

let head = function(value) {
  console.log(value[0])
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");