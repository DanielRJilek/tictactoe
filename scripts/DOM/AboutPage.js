class AboutPage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
    }

    createButtons(about_page) {
        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", this.view.renderTitlePage.bind(this.view));
        about_page.appendChild(back);
    }

    createContent(about_page) {
        const content = document.createElement("div");
        content.setAttribute("id", "about-content");
        const slideshow = document.createElement("div");
        slideshow.classList.add("slideshow");

        const slide1 = document.createElement("div");
        slide1.classList.add("slide", "fade");
        slide1.setAttribute("id", "slide1");
        // slide1.style.backgroundImage = "url(/images/Alfonso.jpg)"
        const caption1 = document.createElement("div");
        caption1.classList.add("caption");
        slide1.appendChild(caption1)
        slideshow.appendChild(slide1);

        const slide2 = document.createElement("div");
        slide2.classList.add("slide", "fade");
        slide2.setAttribute("id", "slide2");
        const caption2 = document.createElement("div");
        caption2.classList.add("caption");
        slide2.appendChild(caption2)
        slideshow.appendChild(slide2);

        const slide3 = document.createElement("div");
        slide3.classList.add("slide", "fade");
        slide3.setAttribute("id", "slide3");
        const caption3 = document.createElement("div");
        caption3.classList.add("caption");
        slide3.appendChild(caption3)
        slideshow.appendChild(slide3);

        content.appendChild(slideshow);

        const aboutText = document.createElement("div");
        aboutText.setAttribute("id", "about-text");
        content.appendChild(aboutText);
        
        about_page.appendChild(content);
    }

    render() {
        const about_page = document.createElement("div");
        about_page.setAttribute("id", "about-page");
        this.createContent(about_page);
        this.createButtons(about_page);
        this.container.appendChild(about_page);
    }
}

export {AboutPage}