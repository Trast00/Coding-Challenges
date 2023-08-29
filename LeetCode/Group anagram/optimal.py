class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """

        # create the hashmap result with default value of list
        result = defaultdict(list)

        # for each str of strs
        for str in strs:
            #create the array character_frequency with default value [0]*26
            character_frequency = [0] * 26
            
            # for each c of str
            for c in str:
                # increment character_frequency[asc(c) - asc(a)] 
                character_frequency[ord(c) - ord("a")] += 1
            
            # in result [character_frequency converted to tuple] add str (to it's list)
            result[tuple(character_frequency)].append(str)

        # Time complexity: O(n*m)
        return result.values()