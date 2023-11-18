const boardSize = 8;
let gameBoard = [];

for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    gameBoard.push([i, j]);
  }
}
console.log(gameBoard);

const adjacencyList = [];

const validKnightMoves = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

function validMoves(pos) {
  const moves = validKnightMoves
    .filter((move) => {
      return (
        pos[0] + move[0] >= 0 &&
        pos[0] + move[0] < 8 &&
        pos[1] + move[1] >= 0 &&
        pos[1] + move[1] < 8
      );
    })
    .map((move) => {
      return (pos[0] + move[0]) * 8 + (pos[1] + move[1]);
    });
  return moves;
}

for (let i = 0; i < gameBoard.length; i++) {
  adjacencyList.push(validMoves(gameBoard[i]));
}

console.log(adjacencyList);

function bfs(start, end = null) {
  const root = start[0] * 8 + start[1];
  const dest = end[0] * 8 + end[1];
  const queue = [root];
  const visited = new Set();
  const result = [];
  console.log(dest);

  while (queue.length) {
    const vertex = queue.shift();
    // console.log(vertex);
    if (vertex == dest) return result;

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);
      for (const neighbor of adjacencyList[vertex]) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

let res = bfs([0, 0], [3, 3]);
console.log(res);
let end = [25];
console.log(typeof end);
console.log(typeof res[3]);
