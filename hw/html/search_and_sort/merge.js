function swap(array, idx_1, idx_2) {
	const holder = array[idx_1]
	array[idx_1] = array[idx_2]
	array[idx_2] = holder
	return array
}



/**
 * merge
 * @param {Array} a_arr 
 * @param {Array} b_arr 
 * Takes two arrays and puts them together in numerical order (ascending)
 */
function merge(a_arr, b_arr) {
	let a_idx = 0
	let b_idx = 0
	const sorted = []
	while (a_idx < a_arr.length || b_idx < b_arr.length) {
		// find the smallest item and push it to the sorted array
		if (a_arr[a_idx] <= b_arr[b_idx] || b_idx > b_arr.length - 1) {
			sorted.push(a_arr[a_idx])
			a_idx++
		}
		else {
			sorted.push(b_arr[b_idx])
			b_idx++
		}
	}
	return sorted
}

function mergeSort(array) {
	// base case, we are done spliting 
	if (array.length <= 1) {
		return array
	}

	// find middle 
	const len = array.length
	const mid = Math.floor((len) / 2)
	const left = array.slice(0, mid)
	const right = array.slice(mid)

	return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(['z', 'a', 'j', 'z', 'g', 'q', 's',]))