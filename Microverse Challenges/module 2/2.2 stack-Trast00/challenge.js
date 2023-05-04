// Optionally: start with your code from LinkedList challenge.
class Node{
  constructor(value, next_node = null){
    this.value = value;
    this.next_node = next_node
  }
}
class Stack {
  constructor(){
    this.head = null;
    this.size = 0;
  }
  push(number) {
    // your code here
    let node = new Node(number)
  //   let current;
    if(!this.head){
      this.head = node
    } else {
      node.next_node = this.head;
      this.head = node
    }
    this.size++
  }
  pop() {
    // your code here
    if (this.head === null) {
      return -1
    } else {
      let current = this.head.value;
      this.head = this.head.next_node
      return current
    }
  }
}
const stack = new Stack()
stack.push(3)  //2  next
stack.push(5)  //1 head
console.log(stack.pop())
// => 5
stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7
console.log(stack.pop())
// => 2
console.log(stack.pop())
// => 3
module.exports = Stack