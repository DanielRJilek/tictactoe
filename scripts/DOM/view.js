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

    // async clearPage() {
    //     return new Promise((resolve,reject) => {
    //         let curtain = document.querySelector(".curtain");
    //         curtain.classList.add("loading");
    //         setTimeout(() => {
    //             while (this.container.firstChild) {
    //                 this.container.lastChild.remove();
    //                 resolve();
    //             }
    //         }, 250);
    //         curtain.classList.remove("notloading");
    //     });
        
    // }

    clearPage() {
        while (this.container.firstChild) {
            this.container.lastChild.remove();
        }
    }   

    // refactor into one 'render' method 
    renderTitlePage() {
        let curtain = document.querySelector(".curtain");
        curtain.classList.add("loading");
        this.clearPage();
        const titlePage = new TitlePage(this, this.container);
        titlePage.render();
        curtain.classList.remove("loading");
    }

    renderGameList() {
        let curtain = document.querySelector(".curtain");
        curtain.classList.add("loading");
        this.clearPage();
        const gameList = new GameList(this, this.container);
        gameList.render();
        curtain.classList.remove("loading");
    }

    renderAboutPage() {
        let curtain = document.querySelector(".curtain");
        curtain.classList.add("loading");
        this.clearPage();
        const aboutPage = new AboutPage(this, this.container);
        aboutPage.render();
        curtain.classList.remove("loading");
        return 1;
    }

    renderTictactoe() {
        let fanfare = new Audio('./assets/audio/medieval-fanfare.mp3')
        fanfare.play();
        let curtain = document.querySelector(".curtain");
        curtain.classList.add("loading");
        this.clearPage();
        const tictactoe = new TictactoePage(this, this.container);
        tictactoe.render();
        curtain.classList.remove("loading");
    }

    renderNineMorris() {
        let fanfare = new Audio('./assets/audio/medieval-fanfare.mp3')
        fanfare.play();
        let curtain = document.querySelector(".curtain");
        curtain.classList.add("loading");
        this.clearPage();
        const nineMorris = new NineMorris(this, this.container);
        nineMorris.render();
        curtain.classList.remove("loading");
    }

    renderAlquerque() {
        let fanfare = new Audio('./assets/audio/medieval-fanfare.mp3')
        fanfare.play();
        let curtain = document.querySelector(".curtain");
        curtain.classList.add("loading");
        this.clearPage();
        const alquerque = new Alquerque(this, this.container);
        alquerque.render();
        curtain.classList.remove("loading");
    }

    renderDoblet() {
        let fanfare = new Audio('./assets/audio/medieval-fanfare.mp3')
        fanfare.play();
        let curtain = document.querySelector(".curtain");
        curtain.classList.add("loading");
        this.clearPage();
        const doblet = new Doblet(this, this.container);
        doblet.render();
        curtain.classList.remove("loading");
    }

    renderMusicPage() {
        let curtain = document.querySelector(".curtain");
        curtain.classList.add("loading");
        this.clearPage();
        const musicPage = new MusicPage(this, this.container);
        musicPage.render();
        curtain.classList.remove("loading");
        return 1;
    }

    
}

export {View}