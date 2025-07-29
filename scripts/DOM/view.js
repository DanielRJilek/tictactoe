import { TitlePage } from "./TitlePage.js"
import { AboutPage } from "./AboutPage.js"
import { GameList } from "./GameList.js";

class View {
    constructor() {
        this.container = document.querySelector(".container");
        this.audio_playing = false;
        this.page = null;
    }

    clearPage() {
        while (this.container.firstChild) {
            this.container.lastChild.remove();
        }
    }

    // refactor into one 'render' method 
    renderTitlePage() {
        this.clearPage();
        const titlePage = new TitlePage(this, this.container);
        titlePage.render();
    }

    renderGameList() {
        this.clearPage();
        const gameList = new GameList(this, this.container);
        gameList.render();
    }

    renderAboutPage() {
        this.clearPage();
        const aboutPage = new AboutPage(this, this.container);
        aboutPage.render();
        return 1;
    }

    
}

export {View}