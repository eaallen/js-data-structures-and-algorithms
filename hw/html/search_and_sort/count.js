function countSort(number_array) {
    const obj = {}
    const sorted = []
    for (let i = 0; i < number_array.length; i++) {
        obj[number_array[i]] ? obj[number_array[i]] += 1 : obj[number_array[i]] = 1
    }

    for (const [key, value] of Object.entries(obj)) {
        for (let i = 0; i < value; i++) {
            sorted.push(Number(key))
        }
    }

    return sorted
}
console.log(countSort([1, 23, 453, 56, 854, 345236, 76, 20, 14, 33, 23, 2, 2, 5, 31, 23, 453, 56, 854, 345236, 76, 20, 14, 33, 23, 2, 2, 5, 31, 23, 453, 56, 854, 345236, 76, 20, 14, 33, 23, 2, 2, 5, 31, 23, 453, 56, 854, 345236, 76, 20, 14, 33, 23, 2, 2, 5, 31, 23, 453, 56, 854, 345236, 76, 20, 14, 33, 23, 2, 2, 5, 31, 23, 453, 56, 854, 345236,23, 453, 56, 854, 345236,23, 453, 56, 854, 345236,23, 453, 56, 854, 345236,23, 453, 56, 854, 345236,23, 453, 56, 854, 345236,23, 453, 56, 854, 345236,23, 453, 56, 854, 345236, 76, 20, 14, 33, 23, 2, 2, 5, 3]))