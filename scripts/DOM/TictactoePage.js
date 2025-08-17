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
                square.classList.add("row"+i.toString());
                square.classList.add("column"+j.toString());
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

    getMark(x,y) {
        return this.game.getBoard()[x][y];
    }

    updateBoard() {
        let board = document.querySelector(".board");
        let squares = board.children;
        for (let i = 0; i < 9; i++) {
            console.log(this.getMark(i%3, Math.floor(i/3)));
            squares[i].textContent = this.getMark(i%3, Math.floor(i/3)) != null ? this.getMark(i%3, Math.floor(i/3)) : '';
        }
    }

    clickHandler(e) {
        const selectedRow = e.target.dataset.row;
        const selectedColumn = e.target.dataset.column;
        if(!selectedColumn || !selectedRow) {
            return;
        }
        if (this.game.gameOver(selectedRow, selectedColumn) == 0) {
            this.game.playRound(selectedRow, selectedColumn);
            this.updateBoard();
            if (this.game.gameOver(selectedRow,selectedColumn) != 0) {
                this.board.removeEventListener("click", this.clickHandler);
                // Add messages and check for tie, move this to new 'end' function
            }
        }
    }

    start() {
        this.board.addEventListener("click", this.clickHandler.bind(this));
    }

    render() {
        const tictactoe = document.createElement("div");
        tictactoe.classList.add("game-page");
        tictactoe.setAttribute("id", "tictactoe-page");

        const holder = document.createElement("div");
        holder.classList.add("board-holder");
        this.board = this.createBoard(holder);
        tictactoe.appendChild(holder);

        const button_holder = document.createElement("div");
        button_holder.classList.add("button-holder");
        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", this.view.renderGameList.bind(this.view));
        button_holder.appendChild(back);

        const help = document.createElement("button");
        help.textContent = "Help";
        help.setAttribute("id", "help-button");
        // help.addEventListener("click", this.view.renderGameList.bind(this.view));
        button_holder.appendChild(help);
        tictactoe.appendChild(button_holder);

        this.container.appendChild(tictactoe);
        this.start();
    }

}

export { TictactoePage }