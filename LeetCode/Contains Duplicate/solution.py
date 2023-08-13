class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        result = {}
        # for each value
        for index, value in enumerate(nums):
            # for each value
            if value in result:
                return True
            else:
                result[value] = True
        return False
