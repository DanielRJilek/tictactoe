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
        slide1.style.backgroundImage = "url('.../images/Alfonso_X_el_Sabio_y_su_corte.jpg')"
        const caption1 = document.createElement("div");
        caption1.classList.add("caption");
        slide1.appendChild(caption1)
        slideshow.appendChild(slide1);

        content.appendChild(slideshow);
        
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