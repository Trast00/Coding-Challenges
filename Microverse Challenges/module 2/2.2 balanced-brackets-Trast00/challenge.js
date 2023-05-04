class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}
class Stack {
  constructor() {
    this.head = null
  }
  add = (value) => {
    if (this.head === null) {
      this.head = new Node(value);
      return
    }
    const newNode = new Node(value);
    newNode.next_node = this.head;
    this.head = newNode;
  }

  pop = () => {
    if (this.head === null) {
      return null;
    }
    let result = this.head.value;
    this.head = this.head.next_node;
    return result;
  }
}
function balancedBrackets(string) {
  // your code here
  const stack = new Stack()
  isBalanced = true
  for (let i = 0; i < string.length; i++) {
    let element = string.charAt(i);
    if (element === '{' || element === '(' || element === '[') {
      stack.add(element)
    }
    else if (element === '}' || element === ')' || element === ']') {
      const poped = stack.pop();
      if (element === ')' && poped=== '(') {
        isBalanced = true;
      }
      else if (element === ']' && poped=== '[') {
        isBalanced = true;
      }
      else if (element === '}' && poped=== '{') {
        isBalanced = true;
      } else {
        isBalanced = false
      }
    }
  }

  const pop = stack.pop()
  if (pop != null) {
    console.log(pop)
    isBalanced = false;
  }
  return isBalanced;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
