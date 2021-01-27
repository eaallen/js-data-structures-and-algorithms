/***********************************************************************************************************
 * WHen doing recursion, you need to have a base case
 * a base case is the point when the the recursion must end
 * 
 * 
 * 
 *  
 *********************************************************************************************************/


export function getNthFibonacci(n, last, last_last) {
    if (n === 0) return last_last
    if (n === 1) return last

    return getNthFibonacci(n - 1, last + last_last, last)
}

console.log(getNthFibonacci(6, 1, 0))

function pascaleTriangle(row, col) {
    if (col === 0) {
        return 1
    }
    if (row === 0) {
        return 0
    }

    return pascaleTriangle(row - 1, col) + pascaleTriangle(row - 1, col - 1)
}



//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
//1 5 10
// 

function timeIt(func){
    let t0 = performance.now()
    func(100024523146321010101011023498191921038423923402352534635634600)
    let t1 = performance.now()
    return t1 - t0 
}


function decimalToBinary(n) {
    // keep deviding by two and then take mod
    let binary_string = ''
    function helper(n) {
        if (n < 2) {
            binary_string += n.toString() // 1 = odd; 0 = even 
            return
        } else {
            helper(Math.floor(n / 2))
            helper(n % 2) // this is says odd or even 
        }
    }
    helper(n)
    return binary_string
}


function betterDecemialToBinary(n) {
    let str = ''
    let i = n
    while (i > 0) {
        str = (i % 2).toString() + str
        i = Math.floor(i / 2)
    }
    return str
}

console.log(' his',timeIt(decimalToBinary))
console.log('Mine',timeIt(betterDecemialToBinary))

const pt = pascaleTriangle(5, 2)
console.table({
    pascaleTriangle: pt,
    decimalToBinary: decimalToBinary(100024523146321010101011023498191921038423923402352534635634600),
    betterDecemialToBinary: betterDecemialToBinary(100024523146321010101011023498191921038423923402352534635634600)
})