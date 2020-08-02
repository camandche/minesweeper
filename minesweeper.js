document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin)

// Define your `board` object here!
//Display counts of how many surrounding cells contain mines
//Use global board to store info about gameboard
//Store how many mines surround each cell
//Count them & store globally

var board = {
  cells: [{row: 0, col: 0, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 0, col: 1, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 0, col: 2, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 0, col: 3, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 0, col: 4, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 0, col: 5, isMine: (Math.random() < 0.4), isMarked: false, hidden: true},
          {row: 1, col: 0, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 1, col: 1, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 1, col: 2, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 1, col: 3, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 1, col: 4, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 1, col: 5, isMine: (Math.random() < 0.4), isMarked: false, hidden: true},
          {row: 2, col: 0, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 2, col: 1, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 2, col: 2, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 2, col: 3, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 2, col: 4, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 2, col: 5, isMine: (Math.random() < 0.4), isMarked: false, hidden: true},
          {row: 3, col: 0, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 3, col: 1, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 3, col: 2, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 3, col: 3, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 3, col: 4, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 3, col: 5, isMine: (Math.random() < 0.4), isMarked: false, hidden: true},
          {row: 4, col: 0, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 4, col: 1, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 4, col: 2, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 4, col: 3, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 4, col: 4, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 4, col: 5, isMine: (Math.random() < 0.4), isMarked: false, hidden: true},
          {row: 5, col: 0, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 5, col: 1, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 5, col: 2, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 5, col: 3, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 5, col: 4, isMine: (Math.random() < 0.4), isMarked: false, hidden: true}, {row: 5, col: 5, isMine: (Math.random() < 0.4), isMarked: false, hidden: true},]
}
  //Write a 'for' loop to loop through board.cells content
  //Loops to call 'countSurroundingMines' one for each cell in 'board.cells'
  //Parse each cell as an argument (...)
  //Assign reult of 'countSurroundingMines' to new property called 'surroundingMines'
  //Define countSurroundMines
  //Return number of cells around current cell that have 'isMine' property = 'true'
  //Check out countSurroudingMines
  //NB: 'lib.getSurroundingCells' is ready to use
  //Use something like: 'var surroundingCells = getSurroundingCells(row,col);'
  //Work out how to get 'row' & 'col' out of your cell {} using . &/or [] notation
  //Loop through surrounding cells returned from 'getSurroundingCells' checking to see if its a mine
  //Add 'count' variable if it is
  //Once count is correct, return it
// var surroundingMines = countSurroundingMines (cell.row, cell.col)
function startGame () {
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
   // cells.isMine = (Math.random() >= 0.5);
  }

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var win = true;
  for (let i = 0; i < board.cells.length; i++) {
    if ((board.cells[i].isMine === true && board.cells[i].isMarked === false)
    || (board.cells[i].isMine === false && board.cells[i].isMarked === true))
    {
    win = false;
    }
      // var randomIndex = Math.floor(Math.random () *cells.length)
      // var randomCell = cells[randomIndex]
    }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    if (win == true) {
      lib.displayMessage('Congratulations, you won!')
      // empty();
    }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 

// // It will return cell objects in an array. You should loop through 
// // them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true){
      count++;
      }
    }
  return count;
}
// // var resetBoard = 0
// function resetBoard() {
//   console.log(resetBoard);
//   document.querySelector(startGame) 
//     board = {},
//     lib.initBoard()
//     clearAll();
//   };
// resetBoard();

// var refresh = document.getElementById("reload").onclick = reloadPage;
//Restart Game using 'reloadPage' function
function reloadPage() {
  window.location.reload();
}

// var audio = document.getElementsByTagName("audio")[0];
// audio.play();

// or with an ID

// var audio = document.getElementById("mySoundClip");
// audio.play();

// audio.addEventListener("click", (event) => {
//   var audio = new Audio('audio/sonar.wav');
//   audio.play();
// })
//play audio with from html audio element: 
// document.getElementById(sonar).play();

//play audio without HTML audio tag
// var myAudio = new Audio('audio/sonar.wav');
// myAudio.play();