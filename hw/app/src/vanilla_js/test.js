import {bigOCalculator} from '../views/BigO'
console.log('this test is comming from the vanilla js folder')

const n = 100
const quibic = function (recordTime) {
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            for (let k = j; k < n; k++) { }
        }
        recordTime()
    }
}

const log = function (recordTime) {
    for (let i = 2; i <= n; i = i * 2) {
        recordTime()
    }
}

console.table({
    log:bigOCalculator(quibic).reduce((a,b)=>a+b),
    quibic:bigOCalculator(log).reduce((a,b)=>a+b)
})

