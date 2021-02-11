function swap(array, idx_1, idx_2) {
    const holder = array[idx_1]
    array[idx_1] = array[idx_2]
    array[idx_2] = holder
    return array
}

function selectSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min_idx = i

        for (let k = i + 1; k < array.length; k++) {
            if (array[k][0] < array[min_idx][0]) {
                min_idx = k
            }
        }

        if (min_idx !== i) {
            swap(array, min_idx, i)
        }
    }
    return array
}

// use merge sort
// split then merge 
function mergeSort(array) {
    // base case
    if (array.length < 2) {
        return array
    }
    const mid_idx = Math.floor(array.length / 2)
    const a_arr = array.slice(0, mid_idx)
    const b_arr = array.slice(mid_idx)

    return merge(mergeSort(a_arr), mergeSort(b_arr))
}


function merge(a_arr, b_arr) {
    let a_idx = 0;
    let b_idx = 0;
    const sorted = []

    while (a_idx < a_arr.length && b_idx < b_arr.length) {
        if (a_arr[a_idx][1] > b_arr[b_idx][1]) {
            sorted.push(a_arr[a_idx])
            a_idx++
        } else {
            sorted.push(b_arr[b_idx])
            b_idx++
        }
    }

    const a_remain = a_arr.slice(a_idx)
    const b_remain = b_arr.slice(b_idx)

    return [...sorted,...a_remain,...b_remain]
}