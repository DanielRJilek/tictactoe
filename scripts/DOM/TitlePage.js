class TitlePage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
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
        about.addEventListener("click", this.view.renderAboutPage.bind(this.view));
        title_page.appendChild(about);
        
    }

    render() {
        const title_page = document.createElement("div");
        title_page.setAttribute("id", "title-page");
        // createTitle(title_page);
        this.createTitle(title_page);
        this.createButtons(title_page);
        this.container.appendChild(title_page);
    }
}

export {TitlePage}