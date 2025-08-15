class Tictactoe {
    constructor() {
        // this.player1 = new Player();
        // this.player2 = new Player();
        this.finished = 0;
        this.turn = 1;
        this.winner = null;
        this.currentPlayer = 1;
        this.board = new Array(3);
        for (let i = 0; i < 3; i++) {
            this.board[i] = new Array(3);
        }
    }

    move(x, y, player) {
        if (this.board[x][y] == null) {
            this.board[x][y] = 'X' === player ? 1 : 'O';
            return true;
        }
        else {
            return false;
        }
    }

    getBoard() {
        return this.board;
    }

    rowWin(x,y) {
        for (let i = 0; i < 3; i++) {
            if (this.getBoard()[x][i] != this.getBoard()[x][y]) {
                return false;
            }
        }
        return true;
    }

    columnWin(x,y) {
        for (let i = 0; i < 3; i++) {
            if (this.getBoard()[i][y] != this.getBoard()[x][y]) {
                return false;
            }
        }
        return true;
    }

    diagonalWin(x,y) {
        return false;
    }

    gameOver(x,y) {
        if (this.turn < 5) {
            return false;
        }
        else if (this.turn === 9) {
            if (this.rowWin(x,y) || this.columnWin(x,y) || this.diagonalWin(x,y)) {
                return true;
            }
            else {
                return null;
            }
        }
        if (this.rowWin(x,y) || this.columnWin(x,y) || this.diagonalWin(x,y)) {
            return true;
        }
        return false;
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    switchCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }

    playRound(x,y) {
        if (this.move(x,y,this.getCurrentPlayer())) {
            this.finished = this.gameOver(x,y);
            // game won
            if (this.finished == 1) {
                this.winner = this.currentPlayer;
                return;
            }
            // game not over
            else if (this.finished == 0) {
                this.switchCurrentPlayer();
                this.turn++;
                return;
            }
            //tie game
            this.finished = 1;
            return;
        }
    }
}

export { Tictactoe }