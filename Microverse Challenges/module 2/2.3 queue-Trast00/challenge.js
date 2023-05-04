// Start with your code from LinkedList challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class Queue {
  head = null;
  add(number) {
    // your code here
    if (this.head === null){
      this.head = new Node(number);
      return number;
    } else {
      var current = this.head
      while (current.next_node != null){
        current = current.next_node
      }
      current.next_node = new Node(number)
    }
  }
  
  remove() {
    // your code here
    if(this.head === null) {
      return -1;
    }else {
      let result = this.head.value
      this.head = this.head.next_node
      return result
    }
  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
