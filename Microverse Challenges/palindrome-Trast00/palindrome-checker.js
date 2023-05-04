module.exports = function (str) {
  // write your code here
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, '').replaceAll(" ", "")
  
  if(str!=str.split("").reverse().join("")){
    return false
  }
  return true
}
