/**
 * Find Common Elements in K-Sorted Arrays
 * 
 */

function commonElements(array_of_arrays) {
  // put all uniqnumber in a hash map {[number]:1}
  // if the number appers in the next array add one

  const hashmap = {}

  for (let index = 0; index < array_of_arrays.length; index++) {
    const array = array_of_arrays[index];
    for (const item of array) {
      if (hashmap[item]) {
        if (hashmap[item] <= index) { // count only once
          hashmap[item] = hashmap[item] + 1
        }
      } else {
        hashmap[item] = 1
      }
    }
  }

  // all elements in hash mapp to see if the value for the key equal the langth of 
  // the array_of_arrays, if so she's a keeper

  const common_elements = []
  for (const key in hashmap) {
    if (hashmap[key] === array_of_arrays.length) {
      const value = parseInt(key)
      common_elements.push(value)
    }
  }

  return common_elements
}

const k = [
  [1, 5, 5, 10],
  [3, 4, 5, 5, 10],
  [5, 5, 5, 5, 5, 10],
]

console.log(commonElements(k))