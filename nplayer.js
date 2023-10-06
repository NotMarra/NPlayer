// NPlayer

class NPlayer {
  constructor(selector) {
    this.playerElement = document.querySelector(selector);
    this.playerElement.classList.add("nplayer");

    this.controls = document.createElement("div");
    this.controls.classList.add("controls");
    this.playerElement.insertBefore(
      this.controls,
      this.playerElement.firstChild
    );
  }
}
