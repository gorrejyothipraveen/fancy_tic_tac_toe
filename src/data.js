const PLAYERS = ['player1', 'player2'];
export const gameState = {
  i : 0,
  player1 : {
    name : null,
    symbol : 'X'
  },
  player2 : {
    name : null,
    Symbol : 'O'
  },
  currentPlayer : PLAYERS[this.i % 2],
  board : [
    [' ', ' ', ' '], 
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
}