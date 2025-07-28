class AboutPage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
        this.slideIndex = 0;
    }

    createButtons(about_page) {
        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        // replace bind with arrow function????
        back.addEventListener("click", this.view.renderTitlePage.bind(this.view));
        about_page.appendChild(back);
    }

    async createContent(about_page) {
        const content = document.createElement("div");
        content.setAttribute("id", "about-content");
        const slideshow = document.createElement("div");
        slideshow.classList.add("slideshow");

        let slideImages = (await this.getSlideImages("./images/slide_images.txt")).split("\n");

        for (let i=0; i < slideImages.length - 1; i++) {
            const slide = document.createElement("div");
            slide.classList.add("slide", "fade");
            const img = document.createElement("img");
            img.src = slideImages[i];
            slide.appendChild(img);
            const caption = document.createElement("div");
            caption.classList.add("caption");
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

        const aboutText = document.createElement("div");
        aboutText.setAttribute("id", "about-text");
        content.appendChild(aboutText);
        
        about_page.appendChild(content);
    }

    nextSlide(n) {
        let slides = document.getElementsByClassName("slide");
        this.slideIndex += n;
        if (this.slideIndex > slides.length - 1) {this.slideIndex = 0}
        else if (this.slideIndex < 0) {this.slideIndex = this.slideIndex - 1};
        this.showSlides(this.slideIndex);
    }

    showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n].style.display = "block"; 
    }

    async getSlideImages(file) {
        let x = await fetch(file);
        let y = await x.text();
        return y;
    }

    async render() {
        const about_page = document.createElement("div");
        about_page.setAttribute("id", "about-page");
        await this.createContent(about_page);
        this.createButtons(about_page);
        this.container.appendChild(about_page);
        this.showSlides(1);
    }
}

export {AboutPage}