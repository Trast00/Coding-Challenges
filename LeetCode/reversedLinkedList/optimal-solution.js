/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // keep track of currentNode of the original list: head
    let currentNode = head
    console.log('debug: ', head)
    if(!head) {
        return head
    }
    let reversedList = new ListNode(currentNode.val, null)
    while (currentNode.next) {
        // currentNode = currentNode.next
        currentNode = currentNode.next
        // reversedList = new ListNode(currentNode.val, reversedList)
        reversedList = new ListNode(currentNode.val, reversedList)
    }

    // return reversed node
    return reversedList
};
