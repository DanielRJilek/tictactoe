import { TitlePage } from "./TitlePage.js"
import { AboutPage } from "./AboutPage.js"
import { GameList } from "./GameList.js"
import { Tictactoe } from "./TictactoePage.js";
import { NineMorris } from "./NineMorris.js";
import { Alquerque } from "./Alquerque.js";
import { Doblet } from "./Doblet.js";
import { MusicPage } from "./MusicPage.js";

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

    renderTictactoe() {
        let fanfare = new Audio('./audio/medieval-fanfare.mp3')
        fanfare.play();
        this.clearPage();
        const tictactoe = new Tictactoe(this, this.container);
        tictactoe.render();
    }

    renderNineMorris() {
        let fanfare = new Audio('./audio/medieval-fanfare.mp3')
        fanfare.play();
        this.clearPage();
        const nineMorris = new NineMorris(this, this.container);
        nineMorris.render();
    }

    renderAlquerque() {
        let fanfare = new Audio('./audio/medieval-fanfare.mp3')
        fanfare.play();
        this.clearPage();
        const alquerque = new Alquerque(this, this.container);
        alquerque.render();
    }

    renderDoblet() {
        let fanfare = new Audio('./audio/medieval-fanfare.mp3')
        fanfare.play();
        this.clearPage();
        const doblet = new Doblet(this, this.container);
        doblet.render();
    }

    renderMusicPage() {
        this.clearPage();
        const musicPage = new MusicPage(this, this.container);
        musicPage.render();
        return 1;
    }

    
}

export {View}