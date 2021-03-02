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

console.log('Sams sort:', _quickSort([5, 4, 8, 4, 12, 1,2 , 3, 3, 2]));