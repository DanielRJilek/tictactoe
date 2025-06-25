// factory for objects
function createPlayer(name, id, symbol) {
    return { name, id, symbol };
}

// IIFE for singleton object
function gameboard() {
    let board = new Array(3);
    for (let i = 0; i < 3; i++) {
        board[i] = new Array(3);
    }

    // getter function to maintain private variable
    this.getBoard = () => board; 

    this.move = function(x, y, player) {
        console.log(board[x][y])
        if (board[x][y] == null) {
            board[x][y] = player.symbol;
            return true;
        }
        else {
            return false;
        }
    }

    return {getBoard, move};
};


// another IIFE
function gameController() {  
    const board = gameboard();
    let winner = null;
    let player1 = createPlayer(1,1, "O");
    let player2 = createPlayer(2,2, "X");
    let turn = 1;
    let currentPlayer = player1;
    let finished = 0;

    this.switchCurrentPlayer = function() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    this.getCurrentPlayer = function() {
        return currentPlayer;
    }

    this.getFinished = function() {
        return finished;
    }

    this.getWinner = function() {
        return winner;
    }

    const rowWin = function(x,y) {
        console.log(getBoard()[x][y]);
        for (let i = 0; i < 3; i++) {
            if (getBoard()[x][i] != getBoard()[x][y]) {
                return false;
            }
        }
        return true;
    }

    const columnWin = function(x,y) {
        for (let i = 0; i < 3; i++) {
            if (getBoard()[i][y] != getBoard()[x][y]) {
                return false;
            }
        }
        return true;
    }

    const diagonalWin = function(x,y) {
        return false;
    }

    const gameOver = function(x,y) {3
        if (turn < 5) {
            return false;
        }
        else if (turn === 9) {
            if (rowWin(x,y) || columnWin(x,y) || diagonalWin(x,y)) {
                return true;
            }
            else {
                return null;
            }
        }
        if (rowWin(x,y) || columnWin(x,y) || diagonalWin(x,y)) {
            return true;
        }
        return false;
    }

    const playRound = function(x,y) {
        if (board.move(x,y,getCurrentPlayer())) {
            finished = gameOver(x,y);
            // game won
            if (finished == 1) {
                winner = currentPlayer;
                return;
            }
            // game not over
            else if (finished == 0) {
                switchCurrentPlayer();
                turn++;
                return;
            }
            //tie game
            finished = 1;
            return;
        }
    }

    return {getCurrentPlayer, getFinished, getWinner, playRound, getBoard: board.getBoard};
};

function screenController() {
    const game = gameController();
    const boardDiv = document.querySelector(".board");
    const startButton = document.querySelector("#start");
    startButton.addEventListener("click", start);

    const squareButtons = document.querySelectorAll(".square button");
    // let row = 0;
    // for (let n = 0; n < 9; n++) {
        
    // }
    // SURELY THE BELOW CAN BE REFACTORED AND IMPROVED ALONG WITH UPDATE SCREEN
    const row1 = document.querySelectorAll(".row1 button");
    for (let i = 0; i < 3; i++) {
        row1[i].dataset.column = i;
        row1[i].dataset.row = 0;
    }
    const row2 = document.querySelectorAll(".row2 button");
    for (let i = 0; i < 3; i++) {
        row2[i].dataset.column = i;
        row2[i].dataset.row = 1;
    }
    const row3 = document.querySelectorAll(".row3 button");
    for (let i = 0; i < 3; i++) {
        row3[i].dataset.column = i;
        row3[i].dataset.row = 2;
    }
    const buttons = Array(3);
    buttons[0] = row1;
    buttons[1] = row2;
    buttons[2] = row3;

    const updateScreen = function() {
        const board = game.getBoard();
        const currentPlayer = game.getCurrentPlayer();
        // boardDiv.innerText = "";
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                buttons[i][j].textContent = board[i][j];
            }
        }
    }

    function clickHandler(e) {
        const selectedRow = e.target.dataset.row;
        const selectedColumn = e.target.dataset.column;
        if(!selectedColumn || !selectedRow) {
            return;
        }
        if (game.getFinished() == 0) {
            game.playRound(selectedRow, selectedColumn);
            updateScreen();
            if (game.getFinished() != 0) {
                boardDiv.removeEventListener("click", clickHandler);
                // Add messages and check for tie, move this to new 'end' function
            }
        }
    }

    function start() {
        boardDiv.addEventListener("click", clickHandler);
    }
};


screenController();
