function repeatStringNumTimes (str, num) {
  // write your code here
  if(num<=0){
    return ""
  }
  let result = ""
  for(let i=0; i<num; i++){
    result = result + str;
  }
  return result
}

module.exports = repeatStringNumTimes
