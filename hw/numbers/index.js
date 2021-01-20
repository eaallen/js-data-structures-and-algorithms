// Number.epsilum
function numberEquals(x, y) {
    // Remember that Number.EPSILON is the smallest difference
    // between two representable numbers and is a Constant
    return Math.abs(x - y) < Number.EPSILON
}


function isPrime(n) {
    if (n <= 1) return false
    if (n <= 3) return true

    if (n % 2 == 0 || n % 3 == 0) return false

    for (let i = 5; i * i < n; i = i + 6) {
        if (n % i === 0 || n % (i + 2) == 0) return false
    }
    return true
}


// console.table({
//     "decimal rounding errors:  0.1+ 0.2 === 0.3": 0.1 + 0.2 === 0.3,
//     'useing Number.EPSILON 0.1+ 0.2 === 0.3': numberEquals(0.1 + 0.2, 0.3),
//     isPrime: isPrime(00000111111000011100)


// })


let f ={
    f1:function(){return 1},
    f2:function(){console.log(this.f1())}
}
// f.f2()


// testing strings

let num = Math.floor(Math.random()*3)
const str_template = {
    head:[`you have ${num} new message(s)` ],
    body:[],
    foot:[],
}