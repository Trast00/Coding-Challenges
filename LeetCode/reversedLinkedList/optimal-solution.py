class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def reverseList(head):
    prev = None
    while head:
        curr = head
        head = head.next
        curr.next = prev
        prev = curr
    return prev

