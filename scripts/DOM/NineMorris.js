class NineMorris {
    constructor(view, container) {
        this.view = view;
        this.container = container;
    }

    render() {
        const ninemorris = document.createElement("div");
        ninemorris.classList.add("game-page");
        ninemorris.setAttribute("id", "ninemorris-page");

        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", this.view.renderGameList.bind(this.view));
        ninemorris.appendChild(back);

        const board = document.createElement("div");
        board.classList.add("board");
        board.setAttribute("id", "ninemorris-board");


        this.container.appendChild(ninemorris);
    }

}

export { NineMorris }