
let arr = [1, 2, 3, 2, 1, 3, 4, 56, 4, 2, 2, 1]

function mergeSort(array) {
    if(array.length <= 1){
        return array
    }
    // divide array in half
    const half_idx = Math.floor(array.length / 2)
    const a_arr = array.slice(0,half_idx)
    const b_arr = array.slice(half_idx)
    // console.log(array)
    return merge(mergeSort(a_arr),mergeSort(b_arr))    
}

function merge(a_arr, b_arr) {
    let a_idx = 0
    let b_idx = 0
    const sorted = []

    while (a_idx < a_arr.length && b_idx < b_arr.length) {
        if (a_arr[a_idx] < b_arr[b_idx]) {
            sorted.push(a_arr[a_idx])
            a_idx++
        } else {
            sorted.push(b_arr[b_idx])
            b_idx++
        }
    }

    const rest = a_idx < a_arr.length ? a_arr.slice(a_idx) : b_arr.slice(b_idx)
    sorted.push(...rest)
    return sorted
}

console.log(mergeSort('a a a e ae'.split(' ')))