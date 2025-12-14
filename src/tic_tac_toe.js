// import { gameState } from "./data.js";

export const areRowsEqual = (board) =>
  board.some((row) => row.every((x) => row[0] === x && x !== " "));

export const areColEquals = (board) => {
  for (let i = 0; i < board.length; i++) {
    let flag = false;
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== board[0][i] || board[j][i] === " ") {
        flag = true;
      }
    }
    if (!flag) {
      return true;
    }
  }
};

export const areDiagonalEqualsFromLToR = (board) =>
  board.every((row, i) => row[i] !== " " && row[i] === board[0][0]);

export const areDiagonalEqualsFromRToL = (board) => {
  return areDiagonalEqualsFromLToR(board.map(x => x.toReversed()));
}


// const winningLocations = (gameState) => {
//   if (areRowsEqual(gameState.board)) {
//     return gameState.winner = gameState.currentPlayer;
//   }

//   if(areColEquals(gameState.board)) {
//     return gameState.winner = gameState.currentPlayer;
//   }
// };
