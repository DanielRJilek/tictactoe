class GameList {
    constructor(view, container) {
        this.view = view;
        this.container = container;
        this.imageHolder = document.createElement("div");;
        this.images = [];
    }

    updateImage(i) {
        while (this.imageHolder.firstChild) {
            this.imageHolder.lastChild.remove();
        }
        const img = document.createElement("img");
        img.src = this.images[i];
        this.imageHolder.appendChild(img);
    }

    createButtons(title_page) {
        const tictactoe = document.createElement("button");
        tictactoe.textContent = "Tic-tac-toe";
        tictactoe.setAttribute("id", "tictactoe-button");
        tictactoe.addEventListener("mouseover", () => this.updateImage(0))
        tictactoe.addEventListener("click", this.view.renderTictactoe.bind(this.view));
        title_page.appendChild(tictactoe);

        const nineMorris = document.createElement("button");
        nineMorris.textContent = "Nine Men's Morris";
        nineMorris.setAttribute("id", "ninemorris-button");
        nineMorris.addEventListener("mouseover", () => this.updateImage(1))
        nineMorris.addEventListener("click", this.view.renderNineMorris.bind(this.view));
        title_page.appendChild(nineMorris);

        const alquerque = document.createElement("button");
        alquerque.textContent = "Alquerque";
        alquerque.setAttribute("id", "alquerque-button");
        alquerque.addEventListener("mouseover", () => this.updateImage(2))
        alquerque.addEventListener("click", this.view.renderAlquerque.bind(this.view));
        title_page.appendChild(alquerque);

        const doblet = document.createElement("button");
        doblet.textContent = "Doblet";
        doblet.setAttribute("id", "doblet-button");
        doblet.addEventListener("mouseover", () => this.updateImage(3))
        doblet.addEventListener("click", this.view.renderDoblet.bind(this.view));
        title_page.appendChild(doblet);        
    }

    async getFileContent(file) {
        let x = await fetch(file);
        let y = await x.text();
        return y;
    }

    async render() {
        this.images = (await this.getFileContent("./assets/game_images.txt")).split("\n");
        const title_page = document.createElement("div");
        title_page.setAttribute("id", "list-page");
        title_page.classList.add("page");
        this.imageHolder.setAttribute("id", "image-holder");
        title_page.append(this.imageHolder);
        const buttonHolder = document.createElement("div");
        buttonHolder.setAttribute("id", "games-holder");
        this.createButtons(buttonHolder);
        title_page.append(buttonHolder);
        const back = document.createElement("button");
        back.textContent = "Back";
        back.setAttribute("id", "back-button");
        back.addEventListener("click", this.view.renderTitlePage.bind(this.view));
        title_page.appendChild(back);
        this.container.appendChild(title_page);
        if (this.view.audio_playing == false) {
            let audio = new Audio('./assets/audio/cantigas.mp3')
            audio.play();
            this.view.audio_playing = true;
        }
        
    }
}

export {GameList}