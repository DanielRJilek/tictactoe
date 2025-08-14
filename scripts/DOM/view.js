import { TitlePage } from "./TitlePage.js"
import { AboutPage } from "./AboutPage.js"
import { GameList } from "./GameList.js"
import { TictactoePage } from "./TictactoePage.js";
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

    async clearPage() {
        let curtain = document.querySelector(".curtain");
        curtain.classList.add("loading");
        setTimeout(() => {
            while (this.container.firstChild) {
            this.container.lastChild.remove();
            }
        }, 250);
        curtain.classList.remove("loading");
    }

    // refactor into one 'render' method 
    async renderTitlePage() {
        await this.clearPage();
        const titlePage = new TitlePage(this, this.container);
        titlePage.render();
    }

    async renderGameList() {
        await this.clearPage();
        const gameList = new GameList(this, this.container);
        gameList.render();
    }

    async renderAboutPage() {
        await this.clearPage();
        const aboutPage = new AboutPage(this, this.container);
        aboutPage.render();
        return 1;
    }

    async renderTictactoe() {
        let fanfare = new Audio('./assets/audio/medieval-fanfare.mp3')
        fanfare.play();
        await this.clearPage();
        const tictactoe = new TictactoePage(this, this.container);
        tictactoe.render();
    }

    async renderNineMorris() {
        let fanfare = new Audio('./assets/audio/medieval-fanfare.mp3')
        fanfare.play();
        await this.clearPage();
        const nineMorris = new NineMorris(this, this.container);
        nineMorris.render();
    }

    async renderAlquerque() {
        let fanfare = new Audio('./assets/audio/medieval-fanfare.mp3')
        fanfare.play();
        await this.clearPage();
        const alquerque = new Alquerque(this, this.container);
        alquerque.render();
    }

    async renderDoblet() {
        let fanfare = new Audio('./assets/audio/medieval-fanfare.mp3')
        fanfare.play();
        await this.clearPage();
        const doblet = new Doblet(this, this.container);
        doblet.render();
    }

    async renderMusicPage() {
        await this.clearPage();
        const musicPage = new MusicPage(this, this.container);
        musicPage.render();
        return 1;
    }

    
}

export {View}