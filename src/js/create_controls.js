function createIcon(name) {
  const icon = document.createElement("div");
  icon.classList.add("icon");
  icon.classList.add(name);
  return icon;
}

export default function create_controls(element) {
  const controls = document.createElement("div");
  controls.classList.add("controls");
  element.appendChild(controls);

  //initalize buttons
  const revind = document.createElement("button");
  revind.classList.add("revind");
  revind.appendChild(createIcon("revind"));
  controls.appendChild(revind);

  const play = document.createElement("button");
  play.classList.add("play");
  play.appendChild(createIcon("play"));
  controls.appendChild(play);

  const forward = document.createElement("button");
  forward.classList.add("forward");
  forward.appendChild(createIcon("forward"));
  controls.appendChild(forward);
}
