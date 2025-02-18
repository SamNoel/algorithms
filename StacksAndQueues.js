/** A stack stores data in the same way that arrays do—it’s simply a list of
elements. The one catch is that stacks have the following three constraints:

-- Data can only be inserted at the end of a stack.
-- Data can only be read from the end of a stack.
-- Data can only be removed from the end of a stack.

Stacks are LIFO - Last In First Out

Stacks are ideal for processing any data that should be handled in reverse
order to how it was received (LIFO). The “undo” function in a word
processor, or function calls in a networked application, are examples of when
you’d want to use a stack.

-- PG 144-152
 */

var stack = []; // use a simple array for our stack
var errors = []; // to hold our errors

// create a hashmap to efficiently check the opening and closing pairs
var braceKeyValuePairs = new Map();
braceKeyValuePairs.set("}", "{");
braceKeyValuePairs.set("]", "[");
braceKeyValuePairs.set(")", "(");

function codeLinter(text) {
  var currentChar = null; // hold the current char of the text

  for (var i = 0; i < text.length; i++) {
    currentChar = text[i];

    if (checkForOpeningBrace(currentChar)) {
      // If the character is an opening brace, we push it onto the stack:
      stack.push(currentChar);
      //console.log("Pushed to stack: " + stack);
    } else if (checkForClosingBrace(currentChar)) {
      if (checkForClosingMostRecentBrace(currentChar)) {
        /** If the character closes the most recent opening brace, we pop the opening brace from our stack: */
        stack.pop();
        //console.log("Popped from stack: " + stack);
      } else {
        // if the character does NOT close the most recent opening brace
        errors.push(`Incorrect closing brace: ${currentChar} at index ${i}`);
      }
    }
  }

  if (stack.length > 0) {
    /** If we get to the end of line, and the stack isn’t empty, that means
     * we have an opening brace without a corresponding closing brace: */
    errors.push(`${stack[stack.length - 1]} does not have a closing brace`);
  }

  if (errors.length > 0) {
    console.log(errors);
  } else {
    console.log("No errors in text.");
  }
}

function checkForOpeningBrace(char) {
  return ["{", "[", "("].includes(char);
}

function checkForClosingBrace(char) {
  return ["}", "]", ")"].includes(char);
}

function checkForClosingMostRecentBrace(char) {
  var mostRecentOpeningBrace = getMostRecentOpeningBrace(stack);

  // If no opening brace, return false
  if (mostRecentOpeningBrace == undefined) {
    return false;
  }

  // Otherwise, check closing brace against opening brace to see if its a pair
  return braceKeyValuePairs.get(char) == mostRecentOpeningBrace;
}

function getMostRecentOpeningBrace(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  }

  return undefined;
}

var textVal = "(var x = {y: [1, 2, 3]})";

codeLinter(textVal);

/** QUEUES
 *
 * With queues, the first item added to the queue is the first item to be removed. (FIFO)
 * Like stacks, queues are arrays with three restrictions (it’s just a different set of restrictions):
 *
 * Data can only be inserted at the end of a queue. (This is identical behavior as the stack.)
 * Data can only be read from the front of a queue. (This is the opposite of behavior of the stack.)
 * Data can only be removed from the front of a queue. (This, too, is the opposite behavior of the stack.)
 *
 */

function PrintManager(queue) {
  this.queue = queue;

  this.queuePrintJob = function (document) {
    queue.push(document);
  };

  this.run = function () {
    while (queue.length > 0) {
      // this shift() method removes and returns the first element
      this.print(queue.shift());
    }
  };

  this.print = function (document) {
    // code for the printer would go here, but we'll just console.log
    console.log(document);
  };
}

const printManager = new PrintManager([]);
printManager.queuePrintJob("First Document");
printManager.queuePrintJob("Second Document");
printManager.queuePrintJob("Third Document");
printManager.run();

/** Because doubly linked lists have immediate access to both the front and end
of the list, they can insert data on either side at O(1) as well as delete data on
either side at O(1). Since doubly linked lists can insert data at the end in O(1)
time and delete data from the front in O(1) time, they make the perfect
underlying data structure for a queue.

Here’s a complete example of a queue that is built upon a doubly linked list: */
function DLLNode(data) {
  this.data = data;
  this.nextNode = null;
  this.previousNode = null;
}

function DoubleyLinkedList(firstNode = null, lastNode = null) {
  this.firstNode = firstNode;
  this.lastNode = lastNode;

  this.insertAtEnd = (value) => {
    let newNode = new DLLNode(value);

    // If there are no elements yet in the linked list:
    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      newNode.previousNode = this.lastNode;
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
  };

  this.removeFromFront = () => {
    let removedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;

    return removedNode;
  };
}

function Queue() {
  this.queue = new DoubleyLinkedList();
  let removedNode = null;

  this.enqueue = (value) => {
    this.queue.insertAtEnd(value);
  };

  this.dequeue = () => {
    removedNode = this.queue.removeFromFront();

    return removedNode.data;
  };

  this.tail = () => {
    return this.queue.lastNode.data;
  };
}
