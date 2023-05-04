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
      return;
    } else {
      var node = this.head
      while (node.next_node != null){
        node = node.next_node
      }
      node.next_node = new Node(number)
    }
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
  
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
