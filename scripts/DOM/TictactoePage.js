class Tictactoe {
    constructor(view, container) {
        this.view = view;
        this.container = container;
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

        const board = document.createElement("div");
        board.classList.add("board");
        board.setAttribute("id", "tictactoe-board");


        this.container.appendChild(tictactoe);
    }

}

export { Tictactoe }