/** Given an array of unsorted numbers, how can we sort them so that they end
up in ascending order? */

/** ---------------------Bubble Sort---------------------
 * O(N^2)
 * In each passthrough, the highest unsorted value “bubbles” up to its correct position.
 */
function bubbleSort(list) {
  var unsortedUntilIndex = list.length - 1;
  var sorted = false;
  var steps = 0;

  while (!sorted) {
    // Assume sorted
    sorted = true;

    for (var i = 0; i <= unsortedUntilIndex; i++) {
      // If greater than next, swap items
      steps++;
      if (list[i] > list[i + 1]) {
        sorted = false;
        var holder = list[i];
        list[i] = list[i + 1];
        list[i + 1] = holder;
        steps++;
      }
    }
    /** By this line of code, we’ve completed another passthrough, and can safely
     * assume that the value we’ve bubbled up to the right is now in its correct
     * position. Because of this, we decrement the unsorted_until_index by 1, since the
     * index it was already pointing to is now sorted. */
    unsortedUntilIndex = unsortedUntilIndex - 1;
  }

  console.log("Steps: " + steps);
  console.log(list);
}

var list = [65, 55, 45, 35, 25, 20, 12, 11, 10, 9];
bubbleSort(list);

/** ---------------------Selection Sort--------------------- */
