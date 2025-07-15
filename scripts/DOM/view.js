import {TitlePage} from "./TitlePage.js"
import {AboutPage} from "./AboutPage.js"

class View {
    constructor() {
        this.container = document.querySelector(".container");
    }

    clearPage() {
        while (this.container.firstChild) {
            this.container.lastChild.remove();
        }
    }

    renderTitlePage() {
        this.clearPage();
        const titlePage = new TitlePage(this, this.container);
        titlePage.render();
    }

    renderAboutPage() {
        clearPage();
        const aboutPage = new AboutPage(this, this.container);
        aboutPage.render();
        return 1;
    }

    
}

export {View}