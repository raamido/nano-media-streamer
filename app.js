const player = document.querySelector(".player");
const video = document.querySelector("video");
const playButton = document.querySelector(".play-or-pause");
const playButtonIcon = playButton.querySelector("img");
const progressBar = document.querySelector(".progress-bar");
const videoDuration = document.querySelector(".duration");
const currentTime = document.querySelector(".current-time");
const toggleFullscreen = document.querySelector(".fullscreen");
const pictureInPicture = document.querySelector(".picture_in_picture");

playButton.addEventListener("click", () => play());

video.addEventListener("canplay", () => {
  const minutes = (video.duration / 60).toFixed();
  const seconds = video.duration.toFixed();
  videoDuration.textContent = `${minutes}:${seconds}`;
});

video.addEventListener("timeupdate", () => {
  const progress = ((video.currentTime / video.duration) * 100).toFixed();
  const currentMinute = (video.currentTime / 60).toFixed();
  const currentSecond = video.currentTime.toFixed();
  progressBar.value = progress;
  progressBar.style.background =
    "linear-gradient(to right, #e63946 0%, #e63946 " +
    progress +
    "%, #fff " +
    progress +
    "%, white 100%)";
  currentTime.textContent = `${currentMinute}:${currentSecond}`;
});
video.addEventListener("ended", () => {
  video.classList.add("paused");
  playButtonIcon.src = "assets/play.svg";
});

progressBar.addEventListener("input", (e) => {
  video.currentTime = (
    (parseInt(e.target.value) / 100) *
    video.duration
  ).toFixed(1);
});

toggleFullscreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

pictureInPicture.addEventListener("click", () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else {
    if (document.pictureInPictureEnabled) {
      video.requestPictureInPicture();
    }
  }
});

const play = () => {
  if (video.paused) {
    playButtonIcon.src = "assets/pause.svg";
    video.classList.remove("paused");
    video.play();
  } else {
    playButtonIcon.src = "assets/play.svg";
    video.classList.add("paused");
    video.pause();
  }
};
