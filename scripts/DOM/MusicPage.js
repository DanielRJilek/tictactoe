class MusicPage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
    }

    createButtons(music_page) {
        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        // replace bind with arrow function????
        back.addEventListener("click", this.view.renderTitlePage.bind(this.view));
        music_page.appendChild(back);
    }

    async getFileContent(file) {
        let x = await fetch(file);
        let y = await x.text();
        return y;
    }

    async createAboutText(content) {
        let text = await this.getFileContent("./images/music.txt");
        let paragraphs = text.split('\n');
        const aboutText = document.createElement("div");
        aboutText.setAttribute("id", "about-text");
        for (let i = 0; i < paragraphs.length; i++) {
            const p = document.createElement("p");
            p.style = "text-indent: 2rem";
            p.innerHTML = paragraphs[i];
            aboutText.appendChild(p);
        }
        content.appendChild(aboutText);
    }

    async createContent(music_page) {
        const content = document.createElement("div");
        content.setAttribute("id", "about-content");
        // await this.createSlides(content);
        const title = document.createElement("h1");
        title.textContent = "Cantigas de Santa Maria";
        content.appendChild(title);
        await this.createAboutText(content);
        music_page.appendChild(content);
    }

    async render() {
        const music_page = document.createElement("div");
        music_page.setAttribute("id", "music-page");
        await this.createContent(music_page);
        this.createButtons(music_page);
        this.container.appendChild(music_page);
        if (this.view.audio_playing == false) {
            let audio = new Audio('./audio/cantigas.mp3')
            audio.play();
            this.view.audio_playing = true;
        }
    }
}

export { MusicPage }