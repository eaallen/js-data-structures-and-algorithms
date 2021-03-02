function swap(array, idx_1, idx_2) {
    const holder = array[idx_1]
    array[idx_1] = array[idx_2]
    array[idx_2] = holder
    return array
}

// BEST: O(n^2)
function selectSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min_idx = i // min_idx is a place holder

        for (let k = i + 1; k < array.length; k++) {
            if (array[k][0] < array[min_idx][0]) {
                min_idx = k // set min_idx as k's idx
            }
        }

        if (min_idx !== i) {
            swap(array, min_idx, i) // make the swap if min_idx does not equal i 
        }
    }
    return array
}