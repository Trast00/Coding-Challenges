class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """

        ### Count the frequency of apparition of each elements ###
        # create a hashmap freq (the num is the key, the number of apparition is value)
        count = {}
        freq = [[]] * (len(nums)+1)

        # count the number of apparition of each el
        for n in nums:
            count[n] = count.get(n,0) + 1

        for key, count in count.items():
            freq[count].append(key)

        res = []

        for i in range(len(freq)-1, 0, -1):
            for j in freq[i]:
                res.append(j)
                if (len(res) == k):
                    return res

        return

        ### Exemple : [1, 1, 1, 2, 2, 3], k=2
        # freq = { 3:1, 1: 3, 2: 2 }