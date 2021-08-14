function removeDuplicates(nums) {
  // start from back and go up
  let k = 0
  for (let i = nums.length - 1; i > 0; i--) { // this will go unitl 1 not 0
    let el = nums[i]
    let j = i - 1
    // check if the next el is the same as current el

    if (el === nums[j] && el === nums[j - 1]) {
      // we found a duplicate time to buble back up the row
      nums[j] = '_'
      while (nums[j + 1] !== '_' && j < nums.length - 1) {
        swap(nums, j, j + 1)
        j++
      }
      k++
    }

  }
  console.log(nums)
  return nums.length - k
}

function swap(arr, a_idx, b_idx) {
  console.log(arr)
  const temp = arr[a_idx]
  arr[a_idx] = arr[b_idx]
  arr[b_idx] = temp
}

const a = removeDuplicates([1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3])

console.log(a)