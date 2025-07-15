class GameList {
    constructor(view, container) {
        this.view = view;
        this.container = container;
    }

    createButtons(title_page) {
        const tictactoe = document.createElement("button");
        tictactoe.textContent = "Tic-tac-toe";
        tictactoe.setAttribute("id", "tictactoe-button");
        title_page.appendChild(tictactoe);

        const doblet = document.createElement("button");
        doblet.textContent = "Doblet";
        doblet.setAttribute("id", "doblet-button");
        title_page.appendChild(doblet);

        const nineMorris = document.createElement("button");
        nineMorris.textContent = "Nine Men's Morris";
        nineMorris.setAttribute("id", "ninemorris-button");
        title_page.appendChild(nineMorris);

        const alquerque = document.createElement("button");
        alquerque.textContent = "Alquerque";
        alquerque.setAttribute("id", "alquerque-button");
        title_page.appendChild(alquerque);

        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", this.view.renderTitlePage.bind(this.view));
        title_page.appendChild(back);
    }

    render() {
        const title_page = document.createElement("div");
        title_page.setAttribute("id", "title-page");
        this.createButtons(title_page);
        this.container.appendChild(title_page);
    }
}

export {GameList}