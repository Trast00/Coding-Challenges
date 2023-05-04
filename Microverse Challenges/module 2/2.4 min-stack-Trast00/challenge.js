class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class Stack {
  head = null
  push(number) {
    // your code here
    if (this.head === null) {
      this.head = new Node (number)
      return;
    }
    const newNode = new Node(number)
    newNode.next_node = this.head
    this.head = newNode
  }
  
  pop() {
    // your code here
    const result =  this.head.value;
    this.head = this.head.next_node;
    return result;
  }
  
  min() {
    // your code here
    let currentNode = this.head;
    let min = currentNode.value;
    while(currentNode.next_node != null){
      if (currentNode.next_node.value < min){
        min = currentNode.next_node.value;
      }
      currentNode = currentNode.next_node;
    }
    return min;
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
