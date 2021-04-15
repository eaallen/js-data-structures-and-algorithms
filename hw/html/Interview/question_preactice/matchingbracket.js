
function expressionHasMatchingBrackets(str_exp) {
  let bool = false
  const paren = [] // holds "()"
  const sqrbrkt = [] // holds "[]" 
  const brkt = [] // holds "{}"

  for (const s of str_exp) {
    switch (s) {
      case '(':
        paren.unshift(s)
        break
      case ')':
        paren.push(s)
        break
      case '[':
        sqrbrkt.unshift(s)
        break
      case ']':
        sqrbrkt.push(s)
        break
      case '{':
        brkt.unshift(s)
        break
      case '}':
        brkt.push(s)
        break
    }
  }
  console.log(paren)
  console.log(sqrbrkt)
  console.log(brkt)

  bool = eval(paren)
  // check for matching
  return bool
}

function eval(array, l = '(', r = ')') {
  let bool = true
  if (array.length % 2 === 1) {
    return false
  }
  while (array.length > 0) {
    const left = array.shift()
    const right = array.pop()
    console.log('left, right')
    console.log(left, right)
    if (left !== l || right !== r) {
      bool = false
      break
    }
  }
  return bool
}

let b = expressionHasMatchingBrackets('(()[]{}')
console.log('answer', b)

