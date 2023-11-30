class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # create a stack (list) that contain all charactere that didnt matched in the other side
        remain_number = []
        n = len(x)
        # for each element in x
        for i, el in enumerate(x):
            # if the element is before x.lenght/2
            if i < n/2:
              # add it to the stack
                remain_number.append(el)
            # if the element is after x.lenght/2
            if n/2 < i:
              # if the element is not equal to the last poped element of remain_number
                if el != remain_list.pop():
                    # return false, as x is not a palindrom
                    return False
        # return true, as x is a palindrom
        return True
