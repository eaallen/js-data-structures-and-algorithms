// find the squar root of a number 
function findSqrt_linear_search(num) {
    for (let i = 0; i < num; i++) {
        if (i * i === num) {
            return i
        }
    }
}

function findSqrt_binary_search(num) {
    let start = 0
    let end = num
    while (start <= end) {
        // cut in half
        let half = Math.floor((start + end) / 2);

        if (half ** 2 === num) {
            return half
        } else if (half ** 2 < num) {
            // go up
            start = half + 1
        } else {
            // go down
            end = half - 1

        }
    }
    return `${num} is a prime number`
}

console.log(findSqrt_binary_search(115249))
