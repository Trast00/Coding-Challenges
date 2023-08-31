class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        # create a hashmap (with key= num and value= index)
        nums_index = {}
        # for each num in nums
        for index, num in enumerate(nums):
            # remain = target - num
            remain = target - num
            # if remain is in hashmap
            if remain in nums_index:
                # return [hashmap[key], currentIndex]
                return [nums_index[remain], index]
            # else, add the num to hashmap
            nums_index[num] = index
        # return Null

        return
