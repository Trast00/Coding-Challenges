// Start with your code from last challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
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

  addAt(index, item) {
    //if the list is empty
    if (this.head === null || index === 0) {
      console.log('new head added')
      this.add(item)
      return;
    }
    //else
    var current = this.head
    var i = 1;
    while(current) {
      if (i === index){
        let newNode = new Node(item)
        newNode.next_node = current.next_node
        current.next_node = newNode
        current = current.next_node
      }
      current = current.next_node
      i = i +1
    }
  }

  getNode(index) {
    // your code here
    if (index===0){
      return this.head;
    }
    var node = this.head
    for (let i = 1; i<index-1; i++){
      node = node.next_node;
    }
    return node;
  }

  get(index) {
    // your code here
    var node = this.head
    for (let i = 0; i<index; i++){
      node = node.next_node;
    }
    var result = node.value
    return result;
  }

  remove(index) {
    //if list is empty
    if (this.head === null) {
      return
    }
    //else
    var current = this.head
    for(let i=0; i<index-1; i++){
      current.next_node
    }
    current.next_node = current.next_node.next_node
  }
}

const list = new LinkedList()

list.add(3)
list.add(5)
list.addAt(1, 11)
list.addAt(0, 13)

console.log(list.get(2))
// => 11

console.log(list.get(3))
// => 5

module.exports = LinkedList
