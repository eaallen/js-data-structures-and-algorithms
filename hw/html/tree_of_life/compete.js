
function timeTest(func) {
    const times = []
    for (let i = 0; i < 100000; i++) {
        const t0 = performance.now()
        func()
        const t1 = performance.now()
        times.push(t1 - t0)
    }
    const avg = times.reduce((a, b) => a + b, 0) / times.length
    // console.table({ 'Average time of extractWords per 20,000 iterations': avg })
    return avg
}

// CHRIS YOUNG
function chrisYoung_extractWords() {
    let scriptureWords = []
    let text = document.getElementById('1Nephi8').innerHTML
    let re = /(<br>[0-9]+)|([\.,?;\n\t])/gi
    let word = ''

    text = text.replace(re, '')

    for (i = 0; i < text.length; i++) {
        if (text[i] === ' ' && word.length > 0) {
            scriptureWords.push(word)
            word = ''
        }
        if (text[i] !== ' ') {
            word += text[i]
        }
    }
    
    function writeWords(words) {
        let count = 5
        let string1 = `${words.length} - `
        let string2 = '... '

        for (i = 0; i < 5; i++) {
            string1 += words[i] + ' '
            string2 += words[words.length - count] + ' '
            count -= 1
        }

        return string1 + string2
    }
    
    document.getElementById('output').innerHTML = writeWords(scriptureWords)
}

// ELIJAH ALLEN 
function elijahAllen_extractWordsRound2(element_id = '1Nephi8') {
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



const cy = timeTest(chrisYoung_extractWords)
const ea = timeTest(elijahAllen_extractWordsRound2)

console.log('Average time (milliseconds) of extractWords per 100,000 iterations')
console.table({
    'Chris Young': cy,
    'Elijah Allen': ea
})


