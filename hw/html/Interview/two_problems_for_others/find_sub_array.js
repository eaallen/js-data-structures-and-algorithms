class SubArrayMachine {
  constructor(arr) {
    this.array = arr
  }

  isSubArray(sub_arr, array = this.array) {
    // O(n^2) approch
    let start_idx = 0
    for (let i_sub = 0; i_sub < sub_arr.length; i_sub++) {
      const item_sub = sub_arr[i_sub]

      for (let index = start_idx; index < array.length; index++) {
        const element = array[index];
        if (item_sub === element) {
          // item_sub is a sub element of array
          start_idx = index 
          break
        }

        if (index === array.length - 1) {
          // we are at the end of the over array and hve not found any match so this must 
          // return false
          return false
        }
      }
    }
    return true
  }
}

const saw = new SubArrayMachine([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(saw.isSubArray([2, 3, 4,23]))

