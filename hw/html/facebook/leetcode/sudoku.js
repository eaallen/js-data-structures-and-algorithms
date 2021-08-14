
let board =
  [   ["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

function validateSquare(board, row_idx = 0, col_idx = 0) {
  console.log('-------------', row_idx, col_idx)
  const obj = {}
  let counter = 0
  while (counter < 9) {
    const c = col_idx + ( counter % 3)
    const value = board[row_idx][c]
    console.log(value)
    if (!check(obj, value)) {
      return false
    }
    if (counter % 3 === 2) {
      row_idx++
    }

    counter++
  }

  return true

}

function check(obj, value) {
  if (value !== '.') {
    if (obj[value]) {
      return false
    } else {
      obj[value] = true
      return true
    }
  }
  return true
}

function validateBoard(board) {
  let row_idx = 0
  let col_idx = 0
  while (row_idx < 9) {
    const r = (row_idx % 3) * 3

    const result = validateSquare(board, r, col_idx)
    if(!result){
      return false
    }


    row_idx++
    // col whould increase by three after row_idx HAS already increased by three
    if(row_idx % 3 === 0){
      col_idx += 3
    }
  }
  return true
}

const bool = validateBoard(board)

console.log(bool)