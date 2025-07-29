class Doblet {
    constructor(view, container) {
        this.view = view;
        this.container = container;
    }

    render() {
        const doblet = document.createElement("div");
        doblet.classList.add("game-page");
        doblet.setAttribute("id", "doblet-page");

        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", this.view.renderGameList.bind(this.view));
        doblet.appendChild(back);

        const board = document.createElement("div");
        board.classList.add("board");
        board.setAttribute("id", "doblet-board");


        this.container.appendChild(doblet);
    }

}

export { Doblet }