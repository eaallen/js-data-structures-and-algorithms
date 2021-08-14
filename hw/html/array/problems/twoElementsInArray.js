/**
 * Problem: Given the array arr, find and return two indices of the array that 
 * add up to weight or return -1 if there is no combination that adds up to weight.
 */

function findSum(arr, num) {
  const obj = {}

  // load elems into obj
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    obj[element] = index
  }

  for (const el of arr) {
    const potential = Math.abs(el - num)
    // check if we do have the potential number
    if (obj[potential] !== undefined) {
      return el + potential === num ? [el, potential] : -1
    }
  }

  // could not find it
  return -1
}

const answer = findSum([1, 2, 3, 4, 5], 1)

console.log(answer)