// NPlayer

import create_controls from "./create_controls.js";

class NPlayer {
  constructor(selector) {
    this.playerElement = document.querySelector(selector);
    this.playerElement.classList.add("nplayer");

    //initialize player
    create_controls(this.playerElement);
  }
}

export default NPlayer;
