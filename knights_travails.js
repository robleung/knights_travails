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

// JavaScript code for printing shortest path between
// two vertices of unweighted graph
const max_value = 9007199254740992;

// a modified version of BFS that stores predecessor
// of each vertex in array p
// and its distance from source in array d
function BFS(adj, src, dest, v, pred, dist) {
  // a queue to maintain queue of vertices whose
  // adjacency list is to be scanned as per normal
  // DFS algorithm
  let queue = [];

  // boolean array visited[] which stores the
  // information whether ith vertex is reached
  // at least once in the Breadth first search
  let visited = new Array(v);

  // initially all vertices are unvisited
  // so v[i] for all i is false
  // and as no path is yet constructed
  // dist[i] for all i set to infinity
  for (let i = 0; i < v; i++) {
    visited[i] = false;
    dist[i] = max_value;
    pred[i] = -1;
  }

  // now source is first to be visited and
  // distance from source to itself should be 0
  visited[src] = true;
  dist[src] = 0;
  queue.push(src);

  // standard BFS algorithm
  while (queue.length > 0) {
    let u = queue[0];
    queue.shift();
    for (let i = 0; i < adj[u].length; i++) {
      if (visited[adj[u][i]] == false) {
        visited[adj[u][i]] = true;
        dist[adj[u][i]] = dist[u] + 1;
        pred[adj[u][i]] = u;
        queue.push(adj[u][i]);

        // We stop BFS when we find
        // destination.
        if (adj[u][i] == dest) return true;
      }
    }
  }

  return false;
}

// utility function to print the shortest distance
// between source vertex and destination vertex
function knightMoves(st, sp) {
  let start = st[0] * 8 + st[1];
  let stop = sp[0] * 8 + sp[1];
  let v = 64;
  let adj = adjacencyList;

  let pred = new Array(v).fill(0);
  let dist = new Array(v).fill(0);

  if (BFS(adj, start, stop, v, pred, dist) == false) {
    console.log("Given source and destination are not connected");
  }
  console.log(pred);

  // vector path stores the shortest path
  let path = new Array();
  let crawl = stop;
  path.push(crawl);
  while (pred[crawl] != -1) {
    console.log(path);
    path.push(pred[crawl]);
    crawl = pred[crawl];
  }

  // distance from source is in distance array
  console.log("Shortest path length is : ", dist[stop]);

  // printing path from source to destination
  console.log("Path is::");

  for (let i = path.length - 1; i >= 0; i--) console.log(gameBoard[path[i]]);
}

// Driver program to test above functions
// no. of vertices
let v = 64;

// array of vectors is used to store the graph
// in the form of an adjacency list
let adj = new Array(v).fill(0);

for (let i = 0; i < v; i++) {
  adj[i] = new Array();
}

knightMoves([0, 0], [7, 7]);
