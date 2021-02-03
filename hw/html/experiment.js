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


const regexCompare_test = (str, test_regex = /A/g) => {
    for (let i = 0; i < str.length; i++) {
        test_regex.test(i)
    }
}

const regexCompare_exec = (str, test_char = /A/g) => {
    while ((test_char.exec(str)) !== null) { }
}


const charCompareSpeed = () => {
    // init data
    const str = document.getElementById('1Nephi8').innerHTML

    const _pureCharCompare = timeIt(() => {pureCharCompare(str)})
    const _stringCompare = timeIt(() => stringCompare(str))
    const _stringIncludesCompare = timeIt(() => stringIncludesCompare(str))
    const _regexCompare_test = timeIt(() => regexCompare_test(str))
    const _regexCompare_exec = timeIt(() => regexCompare_exec(str))

    console.table({
        pureCharCompare: _pureCharCompare,
        stringCompare: _stringCompare,
        stringIncludesCompare: _stringIncludesCompare,
        regexCompare_test: _regexCompare_test,
        regexCompare_exec: _regexCompare_exec,

    })

}



charCompareSpeed()