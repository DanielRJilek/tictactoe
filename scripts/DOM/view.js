import {TitlePage} from "./TitlePage.js"

class View {
    constructor() {
        this.container = document.querySelector(".container");
    }

    renderTitlePage() {
        const titlePage = new TitlePage();
        titlePage.render();
    }

    renderAboutPage() {
        return;
    }

    clearPage() {
        while (this.container.firstChild) {
            this.container.lastChild.remove();
        }
    }
}

export {View}