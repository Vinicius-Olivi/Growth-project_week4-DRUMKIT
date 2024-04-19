const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

// AUDIOS
const boomS = new Audio("./sounds/boom.wav");
const clapS = new Audio("./sounds/clap.wav");
const hihatS = new Audio("./sounds/hihat.wav");
const kickS = new Audio("./sounds/kick.wav");
const openhatS = new Audio("./sounds/openhat.wav");
const rideS = new Audio("./sounds/ride.wav");
const snareS = new Audio("./sounds/snare.wav");
const tinkS = new Audio("./sounds/tink.wav");
const tomS = new Audio("./sounds/tom.wav");

window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 65:
      boomS.play();
      break;
    case 83:
      clapS.play();
      break;
    case 68:
      hihatS.play();
      break;
    case 70:
      kickS.play();
      break;
    case 71:
      openhatS.play();
      break;
    case 72:
      rideS.play();
      break;
    case 74:
      snareS.play();
      break;
    case 75:
      tinkS.play();
      break;
    case 76:
      tomS.play();
      break;
  }
});

/* boom.addEventListener("click", () => {
  boom.style.transform = "rotate(90deg)";
  boomS.play();
}); */
clap.addEventListener("click", () => {
  clapS.play();
});
hihat.addEventListener("click", () => {
  hihatS.play();
});
kick.addEventListener("click", () => {
  kickS.play();
});
openhat.addEventListener("click", () => {
  openhatS.play();
});
ride.addEventListener("click", () => {
  rideS.play();
});
snare.addEventListener("click", () => {
  snareS.play();
});
tink.addEventListener("click", () => {
  tinkS.play();
});
tom.addEventListener("click", () => {
  tomS.play();
});
