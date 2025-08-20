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
        const play = document.createElement("button");
        play.textContent = "Play";
        play.setAttribute("id", "play-button")
        play.addEventListener("click", this.view.renderGameList.bind(this.view));
        title_page.appendChild(play);

        const about = document.createElement("button");
        about.textContent = "About";
        about.setAttribute("id", "about-button");
        about.addEventListener("click", this.view.renderAboutPage.bind(this.view));
        title_page.appendChild(about);

        const music = document.createElement("button");
        music.textContent = "Music";
        music.setAttribute("id", "music-button");
        music.addEventListener("click", this.view.renderMusicPage.bind(this.view));
        title_page.appendChild(music);
        
    }

    render() {
        const title_page = document.createElement("div");
        title_page.setAttribute("id", "title-page");
        title_page.classList.add("page");
        // createTitle(title_page);
        this.createTitle(title_page);
        this.createButtons(title_page);
        this.container.appendChild(title_page);
    }
}

export {TitlePage}