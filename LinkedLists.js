function Node(data) {
  this.data = data;
  this.nextNode = null;
}

function LinkedList(firstNode) {
  this.firstNode = firstNode;

  this.read = (index) => {
    // We begin at the first node of the list:
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      // We keep following the links of each node until we get to the index we’re looking for:
      currentNode = currentNode.nextNode;
      currentIndex += 1;

      // If we’re past the end of the list, that means the value cannot be found in the list, so return null:
      if (currentNode == null) {
        return null;
      }
    }

    return currentNode.data;
  };

  this.searchByValue = (value) => {
    // We begin at the first node of the list:
    let currentNode = this.firstNode;
    let currentIndex = 0;

    do {
      // If we find the data we’re looking for, we return it:
      if (currentNode.data == value) {
        return currentIndex;
      }

      // Otherwise, we move on the next node:
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    } while (currentNode);

    // If we get through the entire list, without finding the data, we return null:
    return null;
  };

  /** the best- and worst-case scenarios for
arrays and linked lists are the opposite of one another. That is, inserting at the
beginning is great for linked lists, but terrible for arrays. And inserting at the
end is an array’s best-case scenario, but the worst case when it comes to a
linked list. */
  this.insertAtIndex = (index, value) => {
    // We begin at the first node of the list:
    let currentNode = this.firstNode;
    let currentIndex = 0;

    //  First, we find the index immediately before where the new node will go:
    while (currentIndex < index) {
      // We keep following the links of each node until we get to the index we’re looking for:
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    // We create the new node:
    let newNode = new Node(value);
    newNode.nextNode = currentNode.nextNode;

    // We modify the link of the previous node to point to our new node:
    currentNode.nextNode = newNode;
  };
}

let node1 = new Node("once");
let node2 = new Node("upon");
node1.nextNode = node2;
let node3 = new Node("a");
node2.nextNode = node3;
let node4 = new Node("time");
node3.nextNode = node4;

let list = new LinkedList(node1);
console.log(list.read(3));

console.log(list.searchByValue("time"));
