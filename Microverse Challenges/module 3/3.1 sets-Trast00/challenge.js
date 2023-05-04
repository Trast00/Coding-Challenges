function findDuplicates(array) {
  // write your code here
  const set = new Set()
  const duplicate = []
  array.forEach(element => {
    if (set.has(element)) {
      duplicate.push(element)
    } else {
      set.add(element)
    }
  });
  return duplicate
}

console.log(findDuplicates([1, 2, 3, 1, 5, 6, 7, 8, 5, 2, 5]))
// => [1, 5, 2]

console.log(findDuplicates([3, 501, 17, 23, -43, 67, 5, 888, -402, 235, 77, 99, 311, 1, -43]))
// => [-43]

module.exports = findDuplicates
