module.exports = function hanoi_steps(numberOfDiscs, start=1, used=2, goal=3) {
  // write your code here
  
  //Solve 2 disc
  let nbrDisc = numberOfDiscs

  let result = ``

  if(nbrDisc===1){
    //adding
    result += `${start}->${goal}\n`
    //nbrDisc-=1
  }

  //solve for two
  if (nbrDisc===2){
    result += `${start}->${used}\n`
    result += `${start}->${goal}\n`
    result += `${used}->${goal}\n`
  }

  if(nbrDisc>=3){

    result = hanoi_steps(numberOfDiscs-1, 1, 3, 2)+ hanoi_steps(1, 1, 2, 3) + hanoi_steps(numberOfDiscs-1, 2, 1, 3)
  }
  console.log("LOG",result)
  return result
}


//console.log(hanoi_steps(2))
// => 1->2 
//    1->3 
//    2->3

//console.log(hanoi_steps(3))
// => 1->3 
//    1->2
//    3->2
//    1->3
//    2->1
//    2->3
//    1->3

//console.log(hanoi_steps(4))
// => 1->2
//    1->3
//    2->3
//    1->2
//    3->1
//    3->2
//    1->2
//    1->3
//    2->3
//    2->1
//    3->1
//    2->3
//    1->2
//    1->3
//    2->3

