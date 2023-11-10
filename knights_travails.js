const boardSize = 8;
let gameBoard = [];

for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    gameBoard.push([i, j]);
  }
}
// console.log(gameBoard);

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
      return pos[0] + knightMove[0] >= 0 && pos[1] + knightMove[1] >= 0;
    })
    .map((move) => {
      return [pos[0] + move[0], pos[1] + move[1]];
    });
  return moves;
}

for (let i = 0; i < gameBoard.length; i++) {
  adjacencyList.push(validMoves(gameBoard[i]));
}

// console.log(validMoves([0, 0]));
console.log(adjacencyList);
