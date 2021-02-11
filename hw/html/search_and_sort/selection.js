function swap(array, idx_1, idx_2) {
    const holder = array[idx_1]
    array[idx_1] = array[idx_2]
    array[idx_2] = holder
    return array
}

function selection(array) {
    for (let i = 0; i < array.length; i++) {
        let min_idx = i
        for (let k = i + 1; k < array.length; k++) {
            if (array[k] < array[min_idx]) {
                min_idx = k
            }
        }

        if(i!==min_idx){
            swap(array,i,min_idx)
        }
    }
    return array
}

console.log(selection([1, 23, 453, 56, 854, 345236, 76, 20, 14, 33, 23, 2, 2, 5, 3]))
