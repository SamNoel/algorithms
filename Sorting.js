/** KEY TAKEAWAY (From A Common Sense Guide to Data Structures and Algorithms)
 * So Big O is an extremely useful tool, because if two algorithms fall under
 * different classifications of Big O, you’ll generally know which algorithm to
 * use since with large amounts of data, one algorithm is guaranteed to be faster
 * than the other at a certain point.
 * However, the main takeaway of this chapter is that when two algorithms fall
 * under the same classification of Big O, it doesn’t necessarily mean that both
 * algorithms process at the same speed. After all, Bubble Sort is twice as slow
 * as Selection Sort even though both are O(N2
 * ). So while Big O is perfect for
 * contrasting algorithms that fall under different classifications of Big O, when
 * two algorithms fall under the same classification, further analysis is required
 * to determine which algorithm is faster.
 */

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
    // Assume sorted and switch to false if not
    sorted = true;

    for (var i = 0; i <= unsortedUntilIndex; i++) {
      // If greater than next, swap items
      steps++;
      if (list[i] > list[i + 1]) {
        sorted = false;
        var temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
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
/** Selection Sort contains about half the
 * number of steps that Bubble Sort does, indicating that Selection Sort is twice
 * as fast. However, its still O(N^2) since big O notation ignores constants (pg 100 of DSA book) */
function selectionSort(array) {
  var steps = 0;
  for (var i = 0; i < array.length; i++) {
    var lowestNumerIndex = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumerIndex]) {
        lowestNumerIndex = j;
      }
      steps++;
    }

    if (lowestNumerIndex != i) {
      var temp = array[i];
      array[i] = array[lowestNumerIndex];
      array[lowestNumerIndex] = temp;
      steps++;
    }
  }
  console.log("Steps: " + steps);
  console.log(array);

  return array;
}

list = [65, 55, 45, 35, 25, 20, 12, 11, 10, 9];
selectionSort(list);
