const video = document.querySelector("video");
const playButton = document.querySelector(".play-or-pause");
const playButtonIcon = playButton.querySelector("img");

playButton.addEventListener("click", () => play());

const play = () => {
  if (video.paused) {
    playButtonIcon.src = "/assets/pause.svg";
    video.play();
  } else {
    playButtonIcon.src = "/assets/play.svg";
    video.pause();
  }
};
