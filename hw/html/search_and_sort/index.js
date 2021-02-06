// Binary search is faster that Linear search 
function binarySearch(array, n) {
    var lowIndex = 0, highIndex = array1.length - 1;

    while (lowIndex <= highIndex) {
        // first: midIndex = (array.length -1) / 2
        var midIndex = Math.floor((highIndex + lowIndex) / 2);
        if (array[midIndex] == n) {
            return midIndex;
        } // grab the higher half 
        else if (n > array[midIndex]) {
            lowIndex = midIndex;
        }  // grab the lower half   
        else {
            highIndex = midIndex;
        }
    }
    return -1;
}


// ----------- QUICK SORT ----------------
function _quickSort(items) {
    return _quickSortHelper(items, 0, items.length - 1);
}

function _quickSortHelper(items, left, right) {
    var index;
    if (items.length > 1) {
        index = _partition(items, left, right);

        if (left < index - 1) {
            _quickSortHelper(items, left, index - 1);
        }

        if (index < right) {
            _quickSortHelper(items, index, right);
        }
    }

    return items;
}

function _partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (left <= right) {
            var temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}
// console.log('Sams sort:', _quickSort([5, 4, 8, 4, 12, 1,2 , 3, 3, 2])); // [1, 2, 3, 4, 6, 23]
// let arr = [5, 4, 8, 12, 1, 3, 2]
// console.log('Sami bae', _partition(arr, 0, arr.length - 1))

// ------------- IN CLASS ------------------

// ------------- ELI's Quick Sort --------------------

/*====================================================
1. find partition 
2. move partition to back
3. from left find item that is bigger than partiton 
4. from right find item that is smaller than partion 
5. swap f_left with f_right
6. stop when index of f_left is greater than index of f_right
7. swap f_left with partion  
8. repeat 
======================================================*/



function quickSort(array) {
    return quickSortHelper(array, 0, array.length - 1)
}

function quickSortHelper(array, left_idx, right_idx) {


    if (array.length > 1) {
        let partion_idx = partion(array, left_idx, right_idx)

        if (left_idx < partion_idx - 1) {
            quickSortHelper(array, left_idx, partion_idx - 1)
        }

        if (right_idx > partion_idx) {
            quickSortHelper(array, partion_idx, right_idx)
        }
    }

    return array
}

function partion(array, left_idx, right_idx) {
    // leverage the shallow coppy of an array, 
    // this param still points to the original in memory  
    let pivot = getMedian(
        array[left_idx],
        array[Math.floor(Math.abs(left_idx - right_idx) / 2)],
        array[right_idx]
    )
    // console.log('eli pivot', pivot)
    // move pivot to end of array 
    // change the array 
    // left_idx will always start smaller than right idx
    while (left_idx <= right_idx) {
        // finding the item f_left -- item biger than pivot
        while (pivot > array[left_idx]) {
            left_idx++
        }

        // finding the item f_right -- item smaller than pivot
        while (pivot < array[right_idx]) {
            right_idx--
        }

        if (left_idx <= right_idx) {
            const holder = array[left_idx]
            array[left_idx] = array[right_idx]
            array[right_idx] = holder
            left_idx++
            right_idx--
        }
        // console.table({
        //     "left index": left_idx,
        //     "Right index": right_idx
        // })
    }

    return left_idx

}

/**
 * Swap items in an array 
 * @param {Object} array 
 * @param {Integer} idx_1 
 * @param {Integer} idx_2 
 */
function swap(array, idx_1, idx_2) {
    const holder = array[idx_1]
    array[idx_1] = array[idx_2]
    array[idx_2] = holder
    return array
}

function getMedian(first, second, third) {
    let array = [first, second, third]
    let i = 0

    // Simple sorting algo, but it doeasnt matter 
    // cause we only have three values to sort


    while (i < array.length) {
        if (array[i] > array[i + 1]) {
            array = swap(array, i, i + 1)
            i = -1
        }
        i++
    }

    return array[1]
}

// partion([5, 4, 8, 12, 1, 3, 2])



// console.log("ELI answer:", quickSort([5, 4, 8, 4, 12, 1,2 , 3, 3, 2]))
// console.log("ELI answer:", quickSort(['A', "AZZ", 'And', 'and']))



// console.log('Sams sort:', _quickSort([5, 4, 8, 4, 12, 1,2 , 3, 3, 2])); // [1, 2, 3, 4, 6, 23]


//-------------------- practice ----------------------
function getPiviot(f, s, t) {
    let arr = [f, s, t]
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > arr[index + 1]) {
            let h = arr[index]
            arr[index] = arr[index + 1]
            arr[index + 1] = h
            index = 0
        }
    }
    return arr[1]
}

console.log(getPiviot(2, 1, 2))

function sort(array) {
   return sortHelp(array, 0, array.length - 1)
}

function sortHelp(array, left_idx, right_idx){
    if(array.length > 1){
        const partition_idx = getPartitionIdx(array,left_idx,right_idx)
        console.log(partition_idx)
        // if(left_idx > )
    }
}

function getPartitionIdx(array, left_idx, right_idx){
    // figure out how to partiosn 
    let pivot = getPiviot(
        array[left_idx],
        array[Math.abs(right_idx-left_idx)/2],
        array[right_idx]
    )

    while(left_idx <= right_idx){
        while(pivot < array[left_idx]){
            left_idx++
        }
        while(pivot > array[right_idx]){
            right--
        }

        if(left_idx <= right_idx){
            let h = array[index]
            array[index] = arr[index + 1]
            array[index + 1] = h

            left_idx++
            right_idx--
        }
        // what is left_idx at this point 
        return left_idx
    }
}






























