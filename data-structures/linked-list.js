// node class to store a node
class Node {
  constructor(data) {
    this.data = data; // the value stored in the node
    this.next = null; // pointer to the next node, initally null
  }
}

// linked list class to store all nodes
class LinkedList {
  constructor() {
    this.head = null; // head points to the first node, initally empty
  }

  //  method to add a node at the end
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode; // If list is empty, set head to new node
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next; // Traverse to the last node
    }
    current.next = newNode; // Link the last node to the new one
  }

  // Method to remove a node by value
  remove(data) {
    if (this.head == null) return; // if the list is empty, nothing to remove

    if (this.head.data === data) {
      this.head = this.head.next; // if head matches, move head forward
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next; // skip the matching node
        return;
      }
      current = current.next;
    }
  }
  // Method to get the size of the list
  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Method to add a node at the beginning (prepend)
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head; // New node points to current head
    this.head = newNode;
  }

  // Method to print the list (for visualization)
  print() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// example
const list = new LinkedList();

list.append(2);

list.prepend(3);

list.append(5);
list.append(6);

list.remove(6);

list.print();
console.log("list size: ", list.size());

// enter `node linked-list.js` in the terminal to see the results
