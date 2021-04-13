class SubArrayMachine {
  constructor(arr) {
    this.array = arr
  }

  isSubArray(sub_arr) {
    let is_sub = false

    for (let i = 0; i < this.array.length; i++) {
      // we found the first match
      if (this.array[i] === sub_arr[0]) {
        for (let j = 1; j < sub_arr.length; j++) {
          let k = j + i
          if (this.array[k] === sub_arr[j]) {
            is_sub = true
          } else {
            is_sub = false
            break
          }
        }
      }
    }

    return is_sub
    // find index of midle ,then expand outward from there
  }
}

const saw = new SubArrayMachine([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(saw.isSubArray([2, 3, 4, 2]))