// I thought it would be fun and insightful to create a little program 
// that does some kind of big loop such that it could test the speed of
// 1. a pure character compare
// 2. a string compare
// 3. a regex compare
const pureCharCompare = (str, test_char = 'A') => {
    for (let i = 0; i < str.length; i++) {
        str[i] === test_char
    }
}

const stringCompare = (str, test_char = 'A') => {
    for (let i = 0; i < str.length; i++) {
        str.substring(i, 1) === test_char
    }
}

const stringIncludesCompare = (str, test_char = 'A') => {
    for (let i = 0; i < str.length; i++) {
        str.includes(test_char)
    }
}
const stringMatchCompare = (str, test_char = 'A') => {
    for (let i = 0; i < str.length; i++) {
        str.match(test_char)
    }
}


const regexCompare_test = (str, test_regex = /A/g) => {
    for (let i = 0; i < str.length; i++) {
        test_regex.test(i)
    }
}

const regexCompare_exec = (str, test_char = /A/g) => {
    let array1;
    while ((array1 = test_char.exec(str)) !== null) { }
}


const charCompareSpeed = () => {
    // init data
    const str = document.getElementById('1Nephi8').innerHTML

    const _pureCharCompare = timeTest(() => {pureCharCompare(str)})
    const _stringCompare = timeTest(() => stringCompare(str))
    const _stringIncludesCompare = timeTest(() => stringIncludesCompare(str))
    const _stringMatchCompare = timeTest(() => stringMatchCompare(str))
    const _regexCompare_test = timeTest(() => regexCompare_test(str))
    const _regexCompare_exec = timeTest(() => regexCompare_exec(str))

    console.table({
        pureCharCompare: _pureCharCompare,
        stringCompare: _stringCompare,
        stringIncludesCompare: _stringIncludesCompare,
        stringMatchCompare: _stringMatchCompare,
        regexCompare_test: _regexCompare_test,
        regexCompare_exec: _regexCompare_exec,

    })

}

function timeTest(func) {
    const times = []
    for (let i = 0; i < 20000; i++) {
        const t0 = performance.now()
        func()
        const t1 = performance.now()
        times.push(t1 - t0)
    }
    const avg = times.reduce((a, b) => a + b, 0) / times.length
    // console.table({ 'Average time of extractWords per 20,000 iterations': avg })
    return avg
}

charCompareSpeed()