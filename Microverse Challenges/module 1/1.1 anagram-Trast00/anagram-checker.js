module.exports = function (str) {
  // write your code here
  let str1 = str;
  let str2 = arguments[1];
  
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, '').replaceAll(" ", "")
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, '').replaceAll(" ", "")

  if(str1.length!=str2.length){
    return false
  }
  
  for(let i=0; i<str1.length; i++){
    let l1 = str1[i]
    for (let j=0; j<str2.length; j++){
      let l2 = str2[j]
      if (l1===l2){
        str2 = str2.slice(0, j) + str2.slice(j+1);
      }
    }
  }
  if(str2.length===0){
    return true;
  }
  else {
    return false
  }
}
