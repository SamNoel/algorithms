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
 * */
function countdownRecursive(number) {
  if (number > 0) {
    console.log(number);
    number--;
    countdown(number);
  }
}
countdownRecursive(10);
