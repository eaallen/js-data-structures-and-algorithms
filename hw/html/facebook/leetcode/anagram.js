/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const answer = []
  let mutable_strs = [...strs]
  // loop thru each word in the array
  for (let i = 0; i < strs.length; i++) {
    // console.log(strs)
    const word = strs[i]
    const arr = []
    for (let j = 0; j < mutable_strs.length; j++) {
      console.log(mutable_strs)
      const sub_word = mutable_strs[j]
      // check that the word has not already be used and word length
      if (sub_word !== false && word.length === sub_word.length) {
        // check of word content
        let pass = true

        // check for the same number of letters
        const word_obj = {}
        for (const letter of word) {
          word_obj[letter] ? word_obj[letter]++ : word_obj[letter] = 1

        }

        const sub_word_obj = {}
        for (const letter of sub_word) {
          sub_word_obj[letter] ? sub_word_obj[letter]++ : sub_word_obj[letter] = 1

        }

        for (const key in word_obj) {
          console.log('key--->', key)
          if (word_obj[key] !== sub_word_obj[key]) {
            pass = false
          }
        }


        if (pass) {
          console.log('word -->', word, sub_word)
          arr.push(sub_word)
          // mutable_strs[j] = false // mark sub_word as used
          // remove the word form the array
          mutable_strs = mutable_strs.filter(x => x !== sub_word)
          // console.log(mutable_strs)
        }

      }
    }

    if (arr.length) {
      answer.push(arr)
    }

  }

  return answer

};

function retry(strs) {
  // sort the strs by thier sorted type
  const obj = {}
  for(const word of strs){
    const sw = sortLetters(word)
    if(obj[sw]){
      obj[sw].push(word)
    }else{
      obj[sw] = [word]
    }
  }

  return Object.values(obj)


  // const answer = []
  // let arr = []
  // let sw = ''


  // const filter = function(x){
  //   if(sortLetters(x) === sw){
  //     arr.push(x)
  //     return false
  //   }
  //   return true
  // }

  // while(strs.length){
  //   const word = strs.shift()
  //   sw = sortLetters(word)
  //   arr = [word]
  //   strs = strs.filter(filter)
  //   answer.push(arr)
  // }
  return answer
}


function sortLetters(word){
  word = word.split('')
  return word.sort().join('')
}


const input = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(retry(input))