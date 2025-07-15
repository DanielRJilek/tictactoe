class AboutPage {
    constructor(view, container) {
        this.view = view;
        this.container = container;
    }

    createButtons(title_page) {
        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", this.view.renderTitlePage.bind(this.view));
        title_page.appendChild(back);
    }

    render() {
        const title_page = document.createElement("div");
        title_page.setAttribute("id", "title-page");
        this.createButtons(title_page);
        this.container.appendChild(title_page);
    }
}

export {AboutPage}