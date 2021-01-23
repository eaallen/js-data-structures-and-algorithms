// import {bigOCalculator} from '../views/BigO'
console.log('this test is comming from the vanilla js folder')

const n = 100
function bigOCalculator(func) {
    const t0 = performance.now()
    const time_keeper = [0]
    const timeKeeper = function () {
        console.log(typeof t0)
        time_keeper.push((performance.now() - t0))
    }
    func(timeKeeper)
    return time_keeper
}

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
const time = {
    qubic: bigOCalculator(quibic).reduce((a, b) => a + b),
    log: bigOCalculator(log).reduce((a, b) => a + b)
}
console.table(time)

