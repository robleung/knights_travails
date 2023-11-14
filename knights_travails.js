const boardSize = 8;
let gameBoard = [];

for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    gameBoard.push([i, j]);
  }
}
console.log(gameBoard);

const adjacencyList = [];

const knightMoves = [
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
  const moves = knightMoves
    .filter((knightMove) => {
      // console.log(pos[0] + knightMove[0] >= 0 && pos[1] + knightMove[1] >= 0);
      return (
        pos[0] + knightMove[0] >= 0 &&
        pos[0] + knightMove[0] < 8 &&
        pos[1] + knightMove[1] >= 0 &&
        pos[1] + knightMove[1] < 8
      );
    })
    .map((move) => {
      return [(pos[0] + move[0]) * 8 + (pos[1] + move[1])];
    });
  return moves;
}

for (let i = 0; i < gameBoard.length; i++) {
  adjacencyList.push(validMoves(gameBoard[i]));
}

// console.log(validMoves([0, 0]));
// for (let i = 0; i < adjacencyList.length; i++) {
//   for (let j = 0; j < adjacencyList[i].length; j++) {
//     if (adjacencyList[i][j] > 63) {
//       console.log(i);
//       console.log(j);
//       console.log(adjacencyList[i][j]);
//     }
//   }
// }
// console.log(adjacencyList);
// console.log(adjacencyList[63]);

function bfs(start) {
  const queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();
    // console.log(queue.length);
    // console.log(visited);

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      //   console.log("---------------");
      //   console.log(queue);
      //   console.log(visited);
      //   console.log(vertex);
      //   console.log(result);
      //   console.log(adjacencyList[vertex]);
      //   console.log(vertex);
      for (const neighbor of adjacencyList[vertex]) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

console.log(bfs([0]));
