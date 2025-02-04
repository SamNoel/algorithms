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

/** ---------------------Insertion Sort--------------------- */
/** Technically the number of steps would be N2 + 2N - 2 steps.
 * However, using Big O we can simplify this to O(N2 + N). BUT,
 * this is not it. Big O Notation only takes into account the
 * highest order of N. So we further simplify this to O(N2)
 *
 * *** In an average-case scenario, insertion sort is faster than
 * selection sort. In a worst-case scenario, selection sort is faster.
 *
 * Whereas insertion sort steps can vary based on the scenario,
 * Selection Sort takes N2 / 2 steps in all cases, from worst
 * to average to best-case scenarios. This is because Selection
 * Sort doesn’t have any mechanism for ending a passthrough early at any point.
 * Each passthrough compares every value to the right of the chosen index no
 * matter what.
 */
function insertionSort(array) {
  var steps = 0;
  for (var i = 1; i < array.length; i++) {
    var position = i;
    var tempValue = array[i];

    while (position > 0 && array[position - 1] < tempValue) {
      array[position] = array[position - 1];
      position = position - 1;
      steps++;
    }

    array[position] = tempValue;
    steps++;
  }

  console.log("Steps: " + steps);
  console.log(array);
}

list = [65, 55, 45, 35, 25, 20, 12, 11, 10, 9];
insertionSort(list);

/** ---------------------Quick Sort--------------------- */
/** In real life, however, none of these methods are actually used to sort arrays. Most
 * computer languages have built-in sorting functions for arrays that save us the
 * time and effort from implementing our own. And in many of these languages,
 * the sorting algorithm that is employed under the hood is Quicksort.
 *
 * Quicksort is an extremely fast sorting algorithm that is particularly efficient
 * for average scenarios. While in worst-case scenarios (that is, inversely sorted
 * arrays), it performs similarly to Insertion Sort and Selection Sort, it is much
 * faster for average scenarios—which are what occur most of the time.
 */

// First we will create a function that can partition an array (see pg 172 of DSA book)
function SortableArray(array) {
  this.array = array;
  this.pivotPosition;
  this.counter = 0;

  this.partition = (leftPointer, rightPointer) => {
    // We always choose the right-most element as the pivot
    this.pivotPosition = rightPointer;
    let pivot = this.array[this.pivotPosition];

    // We start the right pointer immediately to the left of the pivot
    rightPointer -= 1;

    // While true loop will run indefinitely unless you explicity break out of it, which we do
    while (true) {
      // Increment the left pointer until it reaches a value that is greater than the pivot
      while (this.array[leftPointer] < pivot) {
        leftPointer++;
      }

      // Decrement the right pointer until it reaches a value that is less than the pivot
      while (this.array[rightPointer] > pivot) {
        rightPointer--;
      }

      // If the pivots meet, break out of the partition
      if (leftPointer >= rightPointer) {
        break;
      } else {
        // Else, swap the two pivot points and continue
        this.swap(leftPointer, rightPointer);
      }
    }

    // As a final step, we swap the left pointer with the pivot itself (if not equal to the pivot position).
    // At this point after the swap, the pivot value is in the correct position.
    if (leftPointer != this.pivotPosition) {
      this.swap(leftPointer, this.pivotPosition);
    }

    // We return the left_pointer for the sake of the quicksort method
    return leftPointer;
  };

  this.swap = (pointerOne, pointerTwo) => {
    let tempVal = this.array[pointerOne];
    this.array[pointerOne] = this.array[pointerTwo];
    this.array[pointerTwo] = tempVal;
  };

  this.quickSort = (leftIndex, rightIndex) => {
    // Base case: the subarray has 0 or 1 elements
    if (rightIndex - leftIndex <= 0) {
      return;
    }

    // Partition the array and grab the position of the pivot
    this.pivotPosition = this.partition(leftIndex, rightIndex);

    // Recursively call this quicksort method on whatever is left of the pivot
    this.quickSort(leftIndex, this.pivotPosition - 1);

    // Recursively call this quicksort method on whatever is right of the pivot
    this.quickSort(this.pivotPosition + 1, rightIndex);
  };

  this.quickSelect = (kthLowestValue, leftIndex, rightIndex) => {
    this.counter++;
    // Base case: the subarray has 0 or 1 elements
    if (rightIndex - leftIndex <= 0) {
      return this.array[leftIndex];
    }

    // Partition the array and grab the position of the pivot
    this.pivotPosition = this.partition(leftIndex, rightIndex);

    if (kthLowestValue < this.pivotPosition) {
      // Recursively call this quickselect method on whatever is left of the pivot
      // NOTE: We need the return keyword to propogate the value up the stack after the recursive call.
      return this.quickSelect(
        kthLowestValue,
        leftIndex,
        this.pivotPosition - 1
      );
    } else if (kthLowestValue > this.pivotPosition) {
      // Recursively call this quickselect method on whatever is right of the pivot
      // NOTE: We need the return keyword to propogate the value up the stack after the recursive call.
      return this.quickSelect(
        kthLowestValue,
        this.pivotPosition + 1,
        rightIndex
      );
    } else {
      //  if after the partition, the pivot position is in the same spot as the kth lowest value,
      // we’ve found the value we’re looking for
      return this.array[this.pivotPosition];
    }
  };
}

// This will not work with duplicates
let newArray = [0, 5, 2, 1, 6, 3, 4, 9];
let sortableArray = new SortableArray(newArray);
sortableArray.quickSort(0, newArray.length - 1);
console.log("Quicksorted array: " + sortableArray.array);

/** ----------------------Quick Select------------------------- */
/** Quickselect relies on partitioning just like Quicksort, and can be thought of as
a hybrid of Quicksort and binary search. - PG 190 

One of the beautiful things
about Quickselect is that we can find the correct value without having to sort
the entire array. This is O(N) for average scenarios, as opposed to Quicksort's O(N log N)

see above in SortableArray object for Quickselect function
*/
let quickselectArray = [0, 50, 20, 10, 60, 30];
let quickselectSortableArray = new SortableArray(quickselectArray);
var resultVal = quickselectSortableArray.quickSelect(
  1,
  0,
  quickselectArray.length - 1
);
console.log(resultVal);
console.log("Quickselected array: " + resultVal);

// Should be the same result
var resultVal2 = quickselectSortableArray.quickSelect(
  1,
  0,
  quickselectArray.length - 1
);
console.log(resultVal);
console.log("Quickselected array: " + resultVal);
