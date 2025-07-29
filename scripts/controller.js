import {Game} from "./game.js"

class Controller {
    constructor(view) {
        this.view = view;
        this.game = new Game();
    }

    start() {
        this.view.renderTitlePage();
    }


}

export {Controller}