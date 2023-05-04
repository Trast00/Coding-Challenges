module.exports = function move(starting, goal) {
  // write your code here
  let used = 1
  while (starting === used || goal === used) {
    used +=1;
    if(used===4){used =  1}
  }

  
  let result = ""
  result += `${starting}->${used} `
  result += `${starting}->${goal} `
  result += `${used}->${goal}`
  console.log(result)
  return result
}

//console.log(move(1, 3))
// => 1->2 1->3 2->3

//console.log(move(2, 3))
// => 2->1 2->3 1->3
