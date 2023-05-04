/* use left and right pointer and compare them in loop: */
/* Time : O(n) Space O(n/2)=O(n) */
module.exports = function (str) {
  // write your code here
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}
