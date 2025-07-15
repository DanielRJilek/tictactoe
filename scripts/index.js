import {Controller} from "./controller.js";
import {View} from "./DOM/view.js"

let view = new View();
let controller = new Controller(view);
controller.start();