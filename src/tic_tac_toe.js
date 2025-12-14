// import { gameState } from "./data.js";

export const areRowsEqual = (board) =>
  board.some((row) => row.every((x) => row[0] === x && x !== " "));

// const areColEquals = (board) => board.some((_, i) => board.every((x, j) => board[i]))

// const winningLocations = (gameState) => {
//   if (areRowsEqual(gameState.board)) {
//     return gameState.winner = gameState.currentPlayer;
//   }

//   if(areColEquals(gameState.board)) {
//     return gameState.winner = gameState.currentPlayer;
//   }
// };
