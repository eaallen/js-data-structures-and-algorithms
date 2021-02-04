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

// ------------- IN CLASS ------------------
