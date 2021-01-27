// import {bigOCalculator} from '../views/BigO'

export function bigOCalculator(func, work_load) {
    const t0 = performance.now()
    const time_keeper = [0]
    const timeKeeper = function () {
        console.log(typeof t0)
        time_keeper.push((performance.now() - t0))
    }
    func(timeKeeper, work_load)
    return time_keeper
}

export const quibic = function (recordTime, work_load) {
    for (let i = 0; i < work_load; i++) {
        for (let j = i; j < work_load; j++) {
            for (let k = j; k < work_load; k++) { }
        }
        recordTime()
    }
}

export const log = function (recordTime, work_load) {
    for (let i = 2; i <= work_load; i = i * 2) {
        recordTime()
    }
}
// const time = {
//     qubic: bigOCalculator(quibic,100).reduce((a, b) => a + b),
//     log: bigOCalculator(log,100).reduce((a, b) => a + b)
// }
// console.table(time)

