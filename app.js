const video = document.querySelector("video");
const playButton = document.querySelector(".play-or-pause");
const playButtonIcon = playButton.querySelector("img");
const progressBar = document.querySelector(".progress-bar");

playButton.addEventListener("click", () => play());
video.addEventListener("timeupdate", () => {
  const progress = ((video.currentTime / video.duration) * 100).toFixed();
  progressBar.value = progress;
  progressBar.style.background =
    "linear-gradient(to right, #e63946 0%, #e63946 " +
    progress +
    "%, #fff " +
    progress +
    "%, white 100%)";
});
video.addEventListener("ended", () => {
  video.classList.add("paused");
  playButtonIcon.src = "/assets/play.svg";
});

const play = () => {
  if (video.paused) {
    playButtonIcon.src = "/assets/pause.svg";
    video.classList.remove("paused");
    video.play();
  } else {
    playButtonIcon.src = "/assets/play.svg";
    video.classList.add("paused");
    video.pause();
  }
};
