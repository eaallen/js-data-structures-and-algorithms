
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

function timeTest(func) {
    const times = []
    for (let i = 0; i < 20000; i++) {
        const t0 = performance.now()
        func()
        const t1 = performance.now()
        times.push(t1 - t0)
    }
    const avg = times.reduce((a, b) => a + b, 0) / times.length
    console.table({ 'Average time of extractWords per 20,000 iterations': avg })
}

function extractWords(element_id = '1Nephi8') {
    //-------------------- helper Functions ----------------------------
    function slice(array, from_idx = 0, to_idx = array.length) {
        const returned_array = []
        for (let i = from_idx; i < to_idx + 1; i++) {
            returned_array[returned_array.length] = array[i]
        }
        return returned_array
    }

    // joins an array via the spesified string 
    function join(array, joiner = ',') {
        let str = ''
        for (let i = 0; i < array.length - 1; i++) {
            str += array[i] + joiner
        }
        return str + array[array.length - 1]
    }

    function stringIncludes(string, value_to_search, start = 0) {
        for (let start = 0; start < string.length; start++) {
            if (string[start] === value_to_search) {
                return true
            }
        }
        return false
    }


    const scriptureWords = [];
    const data = document.getElementById(element_id).innerHTML
    const output = document.getElementById('output')
    const chars_wanted = 'etaoinshrdlcumwfgypbvkjxqz'
    const space = ' '
    let word = ''
    for (let i = 0; i < data.length; i++) {
        // if this is a <br>
        if (data[i] === '<') {
            i = i + 5
        }
        // if we have a space and the word is not empty push the word to array and then reset 
        if (data[i] === space && word !== '') {
            scriptureWords.push(word)
            word = ''
            i = i + 1
        }
        // if the char is what we want in our word
        if (stringIncludes(chars_wanted, data[i].toLowerCase())) {
            word += data[i]
        }
    }

    // get portions of an array by accessing the index


    let first_five = slice(scriptureWords, 0, 4)
    let last_five = slice(scriptureWords, scriptureWords.length - 5, scriptureWords.length - 1)

    output.innerHTML = `${scriptureWords.length} - ${join(first_five, ' ')} ... 
        ${join(last_five, ' ')}`
}

function extractWordsRound2(element_id = '1Nephi8') {
    const data = document.getElementById(element_id).innerText
    const scriptureWords = [];
    const regex1 = /[A-z]+/g
    let array1;
    while ((array1 = regex1.exec(data)) !== null)  scriptureWords.push(array1[0])
    let l = scriptureWords.length - 1
    let o = `${l + 1} - ${scriptureWords[0]} ${scriptureWords[1]} ${scriptureWords[2]} ${scriptureWords[3]} ${scriptureWords[4]} . . . 
        ${scriptureWords[l - 4]} ${scriptureWords[l - 3]} ${scriptureWords[l - 2]} ${scriptureWords[l - 1]} ${scriptureWords[l]} `
    document.getElementById('output').innerHTML = o
}

// window.onload = () => {
//     let time = timeIt(()=>timeTest(extractWords))
//     console.log('','<---------- Total time for 20,000 iterations ---------->','')
//     console.table({
//         "time in seconds" : convertTime(time, 's'),
//         "time in minutes" : convertTime(time,'m'),
//         "time in hours" : convertTime(time, 'h'),
//         "time in milliseconds" : convertTime(time, 'ms'),
//     })
// }
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