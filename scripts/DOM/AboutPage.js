class AboutPage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
        this.slideIndex = 1;
        const self = this;
    }

    createButtons(about_page) {
        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", self.view.renderTitlePage());
        about_page.appendChild(back);
    }

    async createContent(about_page) {
        const content = document.createElement("div");
        content.setAttribute("id", "about-content");
        const slideshow = document.createElement("div");
        slideshow.classList.add("slideshow");

        let slideImages = (await this.getSlideImages("./images/slide_images.txt")).split("\n");

        for (let i=0; i < 3; i++) {
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

        const leftButton = document.createElement("div");
        leftButton.classList.add("slideButton");
        leftButton.textContent = "<";
        leftButton.onclick = function() {
            self.nextSlide(-1);
        }
        const rightButton = document.createElement("div");
        rightButton.classList.add("slideButton");
        rightButton.textContent = ">";
        rightButton.onclick = function() {
            self.nextSlide(1);
        }
        slideshow.appendChild(leftButton);
        slideshow.appendChild(rightButton);

        content.appendChild(slideshow);

        const aboutText = document.createElement("div");
        aboutText.setAttribute("id", "about-text");
        content.appendChild(aboutText);
        
        about_page.appendChild(content);
    }

    nextSlide(n) {
        this.slideIndex += n;
        this.showSlides(n);
    }

    showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) {this.slideIndex = slides.length};
        if (n < 1) {this.slideIndex = 1};
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex-1].style.display = "block"; 
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