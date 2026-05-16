function playSound(type) {
  const audio = new Audio();

  if (type === "click") {
    audio.src = "https://actions.google.com/sounds/v1/cartoon/pop.ogg";
  } else if (type === "win") {
    audio.src = "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg";
  } else if (type === "lose") {
    audio.src = "https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg";
  } else if (type === "score") {
    audio.src = "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg";
  }

  audio.volume = 0.4;
  audio.play();
}