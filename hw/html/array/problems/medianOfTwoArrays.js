/*
Find the Median of Two Sorted Arrays of the Same Size

Recall that median in an even number of a set is the average of the two middle numbers.
If the array is sorted, this is simple.
*/

function findMedianOfSortedArray(arr) {
  let median
  // if arr.length is odd, than just the middle
  if (arr.length % 2 === 1) {
    median = arr[Math.floor(arr.length / 2)]
  }
  // else take the average of the two middle elements
  else {
    let left = arr[Math.floor(arr.length / 2)]
    let right = arr[Math.ceil(arr.length / 2) - 1]
    median = (left + right) / 2
  }
  return median
}

// test 
console.log(findMedianOfSortedArray([1]))

function findMedianOfTwoSortedArrays(arr_1, arr_2) {
  return (arr_1[arr_1.length - 1] + arr_2[arr_2.length - 1]) / 2
}
