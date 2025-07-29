class MusicPage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
    }

    render() {
        const music_page = document.createElement("div");
        music_page.setAttribute("id", "music-page");

        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        // replace bind with arrow function????
        back.addEventListener("click", this.view.renderTitlePage.bind(this.view));
        music_page.appendChild(back);
        this.container.appendChild(music_page);
    }
}

export { MusicPage }