module.exports = function (num) {
  // write your code here
  let result = 0;

  let listNumber = [0, 1]

  while(1==1){
    let newNumber = listNumber[listNumber.length-1] + listNumber[listNumber.length-2]
    
    if(newNumber>num){
      break;
    }
    
    listNumber.push(newNumber)
    //check sum
    let sum = 0;
    for(let i=0; i<listNumber.length; i++){
      if(listNumber[i]%2!=0){
        sum = sum + listNumber[i];
      }
    }
    
    result = sum;
  }
  return result;
}
