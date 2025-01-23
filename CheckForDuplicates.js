var newArray = [2, 3, 6, 5, 5];

hasDuplicateValueInefficient(newArray);
hasDuplicateValueEfficient(newArray);

// Inefficient version - O(N^2)
function hasDuplicateValueInefficient(array) {
  var steps = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      steps++;
      if (i !== j && array[i] === array[j]) {
        console.log("Inefficient alg done in: " + steps);
        return true;
      }
    }
  }

  console.log("Inefficient alg done in: " + steps);
  return false;
}

// Efficient version - O(N)
/** This only needs to run once, because as the alg goes through the array, it adds
 * a value to the index of the value of array[i]. If that value shows up again in the
 * array, it will check against the new array to see if there is a value and return
 * true if so.
 */
function hasDuplicateValueEfficient(array) {
  var steps = 0;
  var existingNumbers = [];
  for (var i = 0; i < array.length; i++) {
    steps++;
    if (existingNumbers[array[i]] === undefined) {
      existingNumbers[array[i]] = 1;
    } else {
      console.log("Efficient alg done in: " + steps);
      return true;
    }
  }
  console.log("Efficient alg done in: " + steps);
  return false;
}
