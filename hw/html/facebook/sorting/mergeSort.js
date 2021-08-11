const input = [1,234,2345,345,34,34,6,346,3,24,32,42,34,234,23]

function merge(a_array, b_array){
  let a = 0
  let b = 0
  let sorted = []

  while(a < a_array.length || b < b_array.length){
    if(a_array[a] < b_array[b] || b >= b_array .length){
      sorted.push(a_array[a])
      a++
    }else{
      sorted.push(b_array[b])
      b++
    }
  }

  return sorted
}

function mergeSort(arr){
  if(arr.length < 2){
    return arr
  }

  // find the middle
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  const result = merge(mergeSort(left), mergeSort(right))

  return result
}

// test it

console.log(mergeSort(input))