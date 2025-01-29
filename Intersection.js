/** Let’s say that you are writing a JavaScript application, and somewhere in your
code you find that you need to get the intersection between two arrays. The
intersection is a list of all the values that occur in both of the arrays. 
this assumes not duplicates. */

function intersection(firstArray, secondArray) {
  var result = [];

  for (i = 0; i < firstArray.length; i++) {
    for (j = 0; j < secondArray.length; j++) {
      if (firstArray[i] == secondArray[j]) {
        result.push(firstArray[i]);

        /** With this one line (break), we can optimize this
         * algorithm for any case where the arrays share values,
         * by eliminating unnecessary steps.
         */
        break;
      }
    }
  }

  return result;
}
