import {TitlePage} from "./TitlePage.js"
import {AboutPage} from "./AboutPage.js"

class View {
    constructor() {
        this.container = document.querySelector(".container");
    }

    renderTitlePage() {
        this.clearPage();
        const titlePage = new TitlePage(this, this.container);
        titlePage.render();
    }

    renderAboutPage() {
        this.clearPage();
        const aboutPage = new AboutPage(this, this.container);
        aboutPage.render();
        return 1;
    }

    clearPage() {
        while (this.container.firstChild) {
            this.container.lastChild.remove();
        }
    }
}

export {View}