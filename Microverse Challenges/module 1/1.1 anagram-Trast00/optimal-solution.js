/* Use sort on aphabetic then compare: Time: O(nlog(n)) Space: O(n) */
module.exports = function(str1, str2) {
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, '').split("").sort().join("");
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, '').split("").sort().join("");
  return str1 === str2;
}

/* Use Hastable to check frequency: Time: O(n) Space: O(n) */
module.exports = function(str1, str2) {
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, '');
  
  if(str1.length != str2.length) {
    return false;
  }
  
  let freq = {};
  
  for(let i = 0; i < str1.length; i++) {
    let char = str1[i];
    freq[char] = freq[char] ? freq[char] + 1 : 1;
  }
  
  for(let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if(!freq[char]) {
      return false;
    }
    freq[char]--;
  }
  
  return true;
}
