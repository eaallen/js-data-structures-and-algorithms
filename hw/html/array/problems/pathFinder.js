var board =
  `%e%%%%%%%%%
%...%.%...%
%.%.%.%.%%%
%.%.......%
%.%%%%.%%.%
%.%.....%.%
%%%%%%%%%x%`;

const rows = board.split("\n")

const maze = rows.map(x => x.split(''))

function findChar(char, maze) {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[0].length; col++) {
      if (maze[row][col] === char) {
        return [row, col]
      }
    }
  }
}

function mazePathFinder(maze) {
  let start_pos = findChar('x', maze)
  path(start_pos[0], start_pos[1])
  printMaze(maze)
  function path(x, y) {
    if(!maze[x] || !maze[x][y]){
      return false
    }
    // found the end!
    if (maze[x][y] === 'e') {
      maze[x][y] = '+'
      return true
    }

    // found a way or a place we have already visisted 
    if (maze[x][y] === '%' || maze[x][y] === '+') {
      return false
    }

    // we must have found part of the path, mark it
    maze[x][y] = '+'

    // use recursion to find the next place
    if (path(x + 1, y) || path(x - 1, y) || path(x, y + 1) || path(x, y - 1)){
      return true
    }

    maze[x][y] = '.' // oops went the wrong way, time to back-track
    return false
  }
}

function printMaze(maze){
  console.log(maze.map(arr=>arr.join('')).join('\n'))
}

mazePathFinder(maze)