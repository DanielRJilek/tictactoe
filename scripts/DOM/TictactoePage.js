import {Tictactoe } from "../games/Tictactoe.js";

class TictactoePage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
        this.game = new Tictactoe;
        this.board;
    }

    createSquares(board) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const square = document.createElement("div");
                square.dataset.row = i;
                square.dataset.column = j;
                square.classList.add("tictactoe-square");
                square.classList.add("row"+i.toString);
                square.classList.add("column"+j.toString);
                board.appendChild(square);
            }
        }
    }

    createBoard(parent) {
        const board = document.createElement("div");
        board.setAttribute("id", "tictactoe-board");
        board.classList.add("board");
        parent.appendChild(board);
        this.createSquares(board);
        return board;
    }

    updateBoard() {

    }

    clickHandler(e) {
        const selectedRow = e.target.dataset.row;
        const selectedColumn = e.target.dataset.column;
        if(!selectedColumn || !selectedRow) {
            return;
        }
        if (game.gameOver() == 0) {
            game.playRound(selectedRow, selectedColumn);
            updateScreen();
            if (game.gameOver() != 0) {
                boardDiv.removeEventListener("click", clickHandler);
                // Add messages and check for tie, move this to new 'end' function
            }
        }
    }

    start() {
        boardDiv.addEventListener("click", clickHandler);
    }

    render() {
        const tictactoe = document.createElement("div");
        tictactoe.classList.add("game-page", "slow-fade");
        tictactoe.setAttribute("id", "tictactoe-page");

        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", this.view.renderGameList.bind(this.view));
        tictactoe.appendChild(back);

        const help = document.createElement("button");
        help.textContent = "Help";
        help.setAttribute("id", "help-button");
        // help.addEventListener("click", this.view.renderGameList.bind(this.view));
        tictactoe.appendChild(help);
        const holder = document.createElement("div");
        holder.classList.add("board-holder");
        this.board = this.createBoard(holder);
        tictactoe.appendChild(holder);


        this.container.appendChild(tictactoe);
    }

}

export { TictactoePage }