import {TitlePage} from "./TitlePage.js"

class View {
    constructor() {
        this.container = document.querySelector(".container");
    }

    renderTitlePage() {
        titlePage = new TitlePage();
        titlePage.render();
    }

    renderAboutPage() {

    }

    clearPage() {
        while (this.container.firstChild) {
            this.container.lastChild.remove();
        }
    }
}

export {View}