export default function create_controls(element) {
  const controls = document.createElement("div");
  controls.classList.add("controls");
  element.appendChild(controls);

  const playBtn = document.createElement("button");
  playBtn.classList.add("play");
  playBtn.textContent = "Play";
  controls.appendChild(playBtn);

  const pauseBtn = document.createElement("button");
  pauseBtn.classList.add("pause");
  pauseBtn.textContent = "Pause";
  controls.appendChild(pauseBtn);

  const stopBtn = document.createElement("button");
  stopBtn.classList.add("stop");
  stopBtn.textContent = "Stop";
  controls.appendChild(stopBtn);
}
