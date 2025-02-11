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
