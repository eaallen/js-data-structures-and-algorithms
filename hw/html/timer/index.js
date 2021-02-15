function timeIt(func) {
    const t0 = performance.now()
    func()
    const time_in_ms = performance.now() - t0
    return time_in_ms
}

function convertTime(time_in_ms, time_unit = 'ms') {
    switch (time_unit) {
        case 's':
            return time_in_ms / 1000
        case 'm':
            return time_in_ms / (1000 * 60)
        case 'h':
            return time_in_ms / (1000 * 60 * 60)
        default:
            return time_in_ms
    }
}

function timeTest(func, time_ms = 20000) {
    const times = []
    for (let i = 0; i < time_ms; i++) {
        const t0 = performance.now()
        func()
        const t1 = performance.now()
        times.push(t1 - t0)
    }
    const avg = times.reduce((a, b) => a + b, 0) / times.length
    return avg
}


// window.onload = () => {
//     let time = timeIt(()=>timeTest(extractWordsRound2))
//     console.log('','<---------- Total time for 20,000 iterations ---------->','')
//     console.table({
//         "time in seconds" : convertTime(time, 's'),
//         "time in minutes" : convertTime(time,'m'),
//         "time in hours" : convertTime(time, 'h'),
//         "time in milliseconds" : convertTime(time, 'ms'),
//     })
// }