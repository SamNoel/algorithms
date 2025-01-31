// Without recursion
function countdown(number) {
  for (var i = number; i >= 0; i--) {
    console.log(i);
  }
}
countdown(10);

// With recursion
/** The case in which the method will not recurse is known as the base case.
 * So in our countdown() function, 0 is the base case.
 *
 * here’s the process you need to know for reading recursive code:
 *
 * 1. Identify what the base case is.
 * 2. Walk through the function assuming it’s dealing with the base case.
 * 3. Then, walk through the function assuming it’s dealing with the case immediately before the base case.
 * 4. Progress through your analysis by moving up the cases one at a time.
 *
 * The computer calls factorial(3), and before the method is complete, it calls
 * factorial(2), and before factorial(2) is complete, it calls factorial(1). Technically,
 * while the computer runs factorial(1), it’s still in the middle of factorial(2), which
 * in turn is running within factorial(3). The computer uses a stack to keep track of
 * which functions it’s in the middle of calling. This stack is known, appropriately
 * enough, as the *****call stack*****.
 *
 * Interestingly, in the case of infinite recursion (such as the very first example
 * in our chapter), the program keeps on pushing the same method over and over
 * again onto the call stack, until there’s no more room in the computer’s
 * memory—and this causes an error known as stack overflow.
 *
 * */
function countdownRecursive(number) {
  if (number > 0) {
    console.log(number);
    number--;
    countdown(number);
  }
}
countdownRecursive(10);

/** IMPORTANT: Recursion is a natural fit in any situation where you find yourself
 * having to repeat an algorithm within the same algorithm.
 *
 * Take the example of traversing through a filesystem. Let’s say that you have a
 * script that does something with every file inside of a directory. However, you
 * don’t want the script to only deal with the files inside the one directory—you
 * want it to act on all the files within the subdirectories of the directory, and the
 * subdirectories of the subdirectories, and so on.
 *
 * Without recursion, we wouldn't be able to have a function that goes arbitrarily deep
 * for any number of subdirectories.
 *
 * Ex:
 *
 */

// Example method only, wont run
function findDirectories(directory) {
  for (file in directory) {
    if (file.isDirectory && file.name != "." && file.name != "..") {
      console.log(file.name);

      // Here, we would have to have continuous inner loops for each subdir
    }
  }
}

// Using recursion (example method only, wont run):
function findDirectoriesRecursive(directory) {
  for (file in directory) {
    if (file.isDirectory && file.name != "." && file.name != "..") {
      console.log(file.name);
      findDirectoriesRecursive(file.name);
    }
  }
}
