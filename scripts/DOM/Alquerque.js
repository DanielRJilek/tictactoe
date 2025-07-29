class Alquerque {
    constructor(view, container) {
        this.view = view;
        this.container = container;
    }

    render() {
        const alquerque = document.createElement("div");
        alquerque.classList.add("game-page");
        alquerque.setAttribute("id", "alquerque-page");

        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", this.view.renderGameList.bind(this.view));
        alquerque.appendChild(back);

        const board = document.createElement("div");
        board.classList.add("board");
        board.setAttribute("id", "alquerque-board");


        this.container.appendChild(alquerque);
    }

}

export { Alquerque }