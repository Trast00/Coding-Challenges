/* Keep track of the last node so add will be O(1): */
/* Time: O(1) Space: O(1) */
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  enqueue(number) {
    // create new node
    const node = new Node(number);

    // if queue is empty, set head and tail to new node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // otherwise, add new node to the tail and update the tail pointer
      this.tail.next_node = node;
      this.tail = node;
    }
  }
  
  dequeue() {
    // if queue is empty, return -1
    if (!this.head) {
      return -1;
    }

    // remove the head node and update the head pointer
    const result = this.head.value;
    this.head = this.head.next_node;

    // if head is null, also update the tail pointer to null
    if (!this.head) {
      this.tail = null;
    }

    return result;
  }
}

const queue = new Queue()

queue.enqueue(3)
queue.enqueue(5)
console.log(queue.dequeue())
// => 3

queue.enqueue(2)
queue.enqueue(7)
console.log(queue.dequeue())
// => 5

console.log(queue.dequeue())
// => 2

console.log(queue.dequeue())
// => 7

console.log(queue.dequeue())
// => -1

module.exports = Queue
