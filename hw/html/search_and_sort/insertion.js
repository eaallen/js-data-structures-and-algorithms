const array = [1,23,453,56,854,345236,76, 20, 14, 33, 23, 2, 2, 5, 3]


function insertion(array) {
    const sorted = []
    for (let i = 0; i < array.length; i++) {
        sorted.push(array[i])
        for (let k = sorted.length - 1; k > 0 && sorted.length > 1; k--) {
            let h = k - 1
            if (sorted[k] < sorted[h]) {
                swap(sorted, k, h)
            }else{
                break
            }
        }
    }
    return sorted
}

function swap(array, idx_1, idx_2) {
    const holder = array[idx_1]
    array[idx_1] = array[idx_2]
    array[idx_2] = holder
    return array
}

console.log(insertion(array))