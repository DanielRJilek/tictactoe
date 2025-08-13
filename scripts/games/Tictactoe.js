class Tictactoe {
    constructor() {
        this.player1 = new Player();
        this.player2 = new Player();
        this.board = new Array(3);
        for (let i = 0; i < 3; i++) {
            this.board[i] = new Array(3);
        }
    }

    move(x, y, player) {
        if (board[x][y] == null) {
            board[x][y] = player.symbol;
            return true;
        }
        else {
            return false;
        }
    }

    rowWin() {
        for (let i = 0; i < 3; i++) {
            if (getBoard()[x][i] != getBoard()[x][y]) {
                return false;
            }
        }
        return true;
    }

    columnWin() {
        for (let i = 0; i < 3; i++) {
            if (getBoard()[i][y] != getBoard()[x][y]) {
                return false;
            }
        }
        return true;
    }

    diagonalWin() {
        return false;
    }

    gameOver() {
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

    playRound() {

    }
}