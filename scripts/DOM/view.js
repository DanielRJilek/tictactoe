import {TitlePage} from "./TitlePage.js"

class View {
    constructor() {
        this.container = document.querySelector(".container");
    }

    renderTitlePage() {
        const titlePage = new TitlePage(this, this.container);
        titlePage.render();
    }

    renderAboutPage() {
        return 1;
    }

    clearPage() {
        while (this.container.firstChild) {
            this.container.lastChild.remove();
        }
    }
}

export {View}