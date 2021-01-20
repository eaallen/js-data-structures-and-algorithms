// Number.epsilum
function numberEquals(x,y){
    // Remember that Number.EPSILON is the smallest difference
    // between two representable numbers and is a Constant
    return Math.abs(x-y) < Number.EPSILON
}


console.table({
    "decimal rounding errors:  0.1+ 0.2 === 0.3": 0.1+ 0.2 === 0.3,
    'useing Number.EPSILON 0.1+ 0.2 === 0.3': numberEquals(0.1+ 0.2, 0.3)

})