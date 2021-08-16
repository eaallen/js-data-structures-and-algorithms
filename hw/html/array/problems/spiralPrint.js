/**
 * Print the contents of a matrix as a spiril
 */

function spiril(m) {
  let top_row = 0
  let bottom_row = m.length - 1
  let left_col = 0
  let right_col = m[0].length - 1

  // loop throught the matrix, starting in the 
  // top_row -> m.length - right_col,
  // righ_col -> m.lenght - bottom_row,
  // bottom_row -> m.length - left_col
  // left_col -> m.lenght - top_row
  const output = []
  while (top_row <= bottom_row && left_col <= right_col) {
    // top to right
    for (let col = left_col; col <= right_col; col++) {
      console.log(m[top_row][col])
      output.push(m[top_row][col])
    }
    top_row++
    // right to bottom
    for (let row = top_row; row <= bottom_row; row++) {
      console.log(m[row][right_col])
      output.push(m[row][right_col])

    }
    right_col--

    // bottom to left
    if (top_row <= bottom_row) {
      for (let col = right_col; col >= left_col; col--) {
        console.log(m[bottom_row][col])
        output.push(m[bottom_row][col])
      }
      bottom_row--
    }
 
    // left to top
    if (left_col <= right_col) {
      for (let row = bottom_row; row >= top_row; row--) {
        console.log(m[row][left_col])
        output.push(m[row][left_col])
      }
      left_col++
    }
  }
  return output
}

console.log(spiril(
  [
    [1,2],
    [1,2],
    [1,2],
  ]
))

function colSlice(M, col_idx, start, end) {
  const output = []
  if (start === end) return [M[start][col_idx]]
  if (start > end) {
    // reverse
    for (let i = start; i > end; i--) {
      output.push(M[i][col_idx])
    }
  } else {
    for (let i = start; i < end; i++) {
      output.push(M[i][col_idx])
    }
  }
  return output
}

function rowSlice(M, row_idx, start, end) {
  const output = []
  if (start === end) return [M[row_idx][start]]
  if (start > end) {
    // reverse
    for (let i = start; i > end; i--) {
      output.push(M[row_idx][i])
    }

  } else {
    for (let i = start; i < end; i++) {
      output.push(M[row_idx][i])
    }
  }
  return output

}