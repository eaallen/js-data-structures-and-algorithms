/**************************** NOTES **************************
 * Dynamic coding is using data structures to enable
 * the speed of your algorithm
 ************************************************************/


// Fibonacci Example:

let cache = {}
function fibo(n) {
  if (n <= 1) return n
  if (cache[n]) return n
  return (cache[n] = fibo(n - 1) + fibo(n - 2))
}
// console.log(fibo(10))

// Given a distance, n, count the total number of ways to cover n number of
//  steps with one, two, and three steps. For example, when n=3, there are 
//  four combinations (ways), shown here:

function waysToCoverSteps(n) {
  if (n < 0) return 0
  if (n === 0) return 1
  return waysToCoverSteps(n - 1) + waysToCoverSteps(n - 2) + waysToCoverSteps(n - 3)
}

// console.log(waysToCoverSteps(12))

// may attempt to make this work with dynamic preograming
function waysToCoverStepsBest(n) {
  const cache = {}
  if (n < 0) return 0
  if (n === 0) return 1

  // use recursion if number has not already been calculated
  if (cache[n] === undefined) {
    cache[n] = waysToCoverSteps(n - 1) + waysToCoverSteps(n - 2) + waysToCoverSteps(n - 3)
    return cache[n]
  }

  return cache[n]

}

// console.log(waysToCoverStepsBest(12))

// classic Dynamic Programing Problems

/**
 * Given n weights and the values of items, put these items in a knapsack of a 
 * given capacity, w, to get the maximum total value in the knapsack.
 */

function knapsack(index, weights, values, target) {
  let result = 0
  if (index <= -1 || target === 0) {
    return 0
  } else if (weights[index] > target) {
    result = knapsack(index - 1, weights, values, target)
  } else {
    let current = knapsack(index - 1, weights, values, target)

    let current_plus_other =
      values[index] + knapsack(index - 1, weights, values, target - weights[index])

    result = Math.max(current, current_plus_other)
  }
  return result
}

var weights = [1, 2, 4, 2, 5],
  values = [5, 3, 5, 3, 2],
  target = 10;
// console.log(knapsack(values.length - 1, weights, values, target))

// add every number from range n-0
function basicRecursion(n) {
  if (n > 0) {
    n += basicRecursion(n - 1)
  }
  return n
}

console.log(basicRecursion(10))




















