class MusicPage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
        this.slideIndex = 0;
    }

    createButtons(music_page) {
        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        // replace bind with arrow function????
        back.addEventListener("click", this.view.renderTitlePage.bind(this.view));
        music_page.appendChild(back);
    }

    async createSlides(content) {
        const slideshow = document.createElement("div");
        slideshow.classList.add("slideshow");
        let slideImages = (await this.getFileContent("./images/music_slide_images.txt")).split("\n");
        let captions = (await this.getFileContent("./images/music_slide_captions.txt")).split("\n");
        for (let i=0; i < slideImages.length; i++) {
            const slide = document.createElement("div");
            slide.classList.add("slide", "fade");
            const img = document.createElement("img");
            img.src = slideImages[i];
            slide.appendChild(img);
            const caption = document.createElement("div");
            caption.classList.add("caption");
            caption.textContent = captions[i];
            slide.appendChild(caption)
            slideshow.appendChild(slide);
        }

        const holder = document.createElement("div");
        holder.classList.add("button-holder");
        const leftButton = document.createElement("div");
        leftButton.classList.add("slide-button");
        leftButton.textContent = "<";
        leftButton.onclick = () => this.nextSlide(-1);
        const rightButton = document.createElement("div");
        rightButton.classList.add("slide-button");
        rightButton.textContent = ">";
        rightButton.onclick = () => this.nextSlide(1);
        holder.appendChild(leftButton);
        holder.appendChild(rightButton);
        slideshow.appendChild(holder);

        content.appendChild(slideshow);
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
        await this.createSlides(content);
        await this.createAboutText(content);
        music_page.appendChild(content);
    }

    nextSlide(n) {
        let slides = document.getElementsByClassName("slide");
        this.slideIndex += n;
        if (this.slideIndex > slides.length - 1) {this.slideIndex = 0}
        else if (this.slideIndex < 0) {this.slideIndex = slides.length - 1};
        this.showSlides(this.slideIndex);
    }

    showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n].style.display = "block"; 
    }

    async render() {
        const music_page = document.createElement("div");
        music_page.setAttribute("id", "music-page");
        await this.createContent(music_page);
        this.createButtons(music_page);
        this.container.appendChild(music_page);
        this.showSlides(0);
        if (this.view.audio_playing == false) {
            let audio = new Audio('./audio/cantigas.mp3')
            audio.play();
            this.view.audio_playing = true;
        }
    }
}

export { MusicPage }