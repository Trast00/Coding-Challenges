module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  const middle = parseInt((min_interval + max_interval)/2)
  if((middle*middle)===number){
    return middle
  } 
  else if (number<(middle*middle)){
    return sqrt_recursive(number, min_interval, middle-1)
  }
  else if (number>(middle*middle)){
    return sqrt_recursive(number, middle+1, max_interval)
  }
  return middle
}

//console.log(sqrt(25))
//console.log(sqrt(7056))
