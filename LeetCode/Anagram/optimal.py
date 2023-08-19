class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        # create a hashmap to track the frequency of apparition of each character
        freq = {}
        # remove the spaces in both s and t
        s1 = s.strip()
        t1 = t.strip() 

        # if they don't have the same lenght
        if (len(s1) != len(t1)):
            # return flase
            return False

        # loop through s (for each charater)
        for character in s1:
            # if charactere exist in hashmap
            if character in freq:
                # increase the value (the frequency) by 1
                freq[character] = freq.get(character, 0) + 1
            # else
            else:
                # add the charater to hashmap (charater is the key and value is 1)
                freq[character] = 1
        
        # loop through t (for each charater)
        for character in t1:
            # if charactere exist in hashmap 
            # if the value is not 0
            if character in freq:
                # decrease the value (the frequency) by 1
                freq[character] = freq.get(character, 0) - 1
            # else
            else:
                # return false
                return False

        # loop hashmap
        for key, value in freq.items():
            # if value is not 0
            if (value<0):
                # return false
                return False
        # return true
        return True