const boardSize = 8;
let gameBoard = [];

for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    gameBoard.push([i, j]);
  }
}
console.log(gameBoard);

const adjacencyList = [];

const validMoves = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

for (let i = 0; i < gameBoard.length; i++) {}
