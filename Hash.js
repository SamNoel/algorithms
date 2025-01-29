/** The process of taking characters and converting them to numbers is known as
hashing. And the code that is used to convert those letters into particular
numbers is called a hash function. */ // -- DSA Book page 128

/** Although a hash table with one hundred cells is great for avoiding collisions,
we’d be using up one hundred cells to store just five pieces of data, and that’s
a poor use of memory.

This is the balancing act that a hash table must perform. A good hash table
strikes a balance of avoiding collisions while not consuming lots of memory. 
To accomplish this, computer scientists have developed the following rule of
thumb: for every seven data elements stored in a hash table, it should have ten
cells. This ratio of data to cells is called the load factor. Using this terminology,
we’d say that the ideal load factor is 0.7 (7 elements / 10 cells).

-- pg 138 */

// Function to check for duplicate values, but also supports strings
function hasDuplicateValue(array) {
  var existingValues = {}; // hash map

  for (var i = 0; i < array.length; i++) {
    if (existingValues[array[i]] === undefined) {
      existingValues[array[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

// Function to count votes in an election
var votes = {};

function addVote(candidate) {
  if (votes[candidate]) {
    votes[candidate]++;
  } else {
    votes[candidate] = 1;
  }
}

function countVotes() {
  return votes;
}
