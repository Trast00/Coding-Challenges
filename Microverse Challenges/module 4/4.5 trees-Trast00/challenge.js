function leftmostNodesSum(array) {
  // your code here
  if (array.length <= 0){
    return 0
  }
  let result = 0;
  const nbrLevel = (array.length-1)/2;

  //add the index[0] value
  //indexs: 1 -> 3 -> 7 = (n+=2n+1) with n=[2n + 1]
  //start with 0, follow 2i+1
  for (let i=0; i<array.length; i=(2*i+1)) {
    result+= array[i]
  }

  return result;
}

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]))
// => 11

module.exports = leftmostNodesSum
