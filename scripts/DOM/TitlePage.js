class TitlePage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
    }

    createHeader() {
        const header = document.createElement("div");
        // header.setAttribute("")
        header.classList.add("header")
    }

    createTitle(title_page) {
        const title = document.createElement("div");
        title.textContent = "Libro de los Juegos";
        title.setAttribute("id", "title");
        title_page.appendChild(title);
    }

    createButtons(title_page) {
        const tictactoe = document.createElement("button");
        tictactoe.textContent = "Tic-tac-toe";
        tictactoe.setAttribute("id", "tictactoe-button")
        title_page.appendChild(tictactoe);

        const about = document.createElement("button");
        about.textContent = "About";
        about.setAttribute("id", "id-button");
        title_page.appendChild(about);
        about.addEventListener("click", this.view.renderAboutPage());
    }

    render() {
        const title_page = document.createElement("div");
        title_page.setAttribute("id", "title-page");
        createTitle(title_page);
        createButtons(title_page);
        this.container.appendChild(title_page);
    }
}

export {TitlePage}