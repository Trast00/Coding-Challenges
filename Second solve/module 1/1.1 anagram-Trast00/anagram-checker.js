module.exports = function (str1, str2) {

  // lowercase and remove non-alphanumrical
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, '')
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, '')

  // if str1 and str2 have different size return false
  if (str1.length != str2.length) {
    return false
  }

  // create hastble to track the frequency of apparition of letter 
  const freq = {}

  // for each letter in str1
  for (let i=0; i<str1.length; i++) {
    // if the letter exist in the Hashtable increment 
    if (freq[str1[i]]) {
      freq[str1[i]] += 1
    }
    else {
      // else add it freq[letter] = 1
      freq[str1[i]] = 1
    }
  }

  // for each letter in str2
  for (let i=0; i<str2.length; i++) {
    // if the letter exist in the Hashtable and is >0, decrement
    if(freq[str2[i]] && freq[str2[i]] > 0){
      freq[str2[i]] -= 1
    }
    else {
      // else return false
      return false
    }

  }
  // return true
  return true
}

/* First solution
  // split str in str1 & str2
  // Lower Case str
  // Remove all non-alphanumerical value to str
  // sort 
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('')
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('')
  // check if str1 and str2 are equal 
  return (str1 == str2)

*/