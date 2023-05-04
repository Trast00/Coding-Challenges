function hashTable(arr) {
  // write your code here
  const hashmap = new Map()
  
  arr.forEach(element => {
    const key = Math.abs(element%11)
    let newValue = []
    if(hashmap.has(key)){
      newValue = hashmap.get(key)
    }
    newValue.push(element)
    hashmap.set(key, newValue)
  });

  let result = []
  for(let i=0; i<11; i++){
    if(hashmap.has(i)){
      result = [...result, ...hashmap.get(i)]
    }
  }
  
  return result
}

console.log(hashTable([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10]))
// => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]

console.log(hashTable([2, 341, 73, 8265, 234004, 602, 7400000, 200000000]))
// => [341, 234004, 2, 200000000, 7400000, 8265, 73, 602]

module.exports = hashTable
