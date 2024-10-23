const videoWrapper = document.querySelector(".video-container"),
  videoContainer = document.querySelector(".vid"),
  video = document.querySelector(".video-container__video"),
  videoControls = document.querySelector(".video-container__controls"),
  fullscreenControl = document.querySelector(".vid-i.fs"),
  playControl = document.querySelector(".vid-i.play"),
  stopControl = document.querySelector(".control--stop"),
  replayControl = document.querySelector(".control--replay"),
  rewindControl = document.querySelector("img.vid-i.back"),
  forwardControl = document.querySelector(".vid-i.next"),
  volumeControl = document.querySelector(".control--volume__button"),
  volumeSlider = document.querySelector(".control--volume__slider"),
  progressBar = document.querySelector(".progress_");

// EVENTS

// Pause/play video
playControl.addEventListener("click", (e) => {
  let $this = e.currentTarget;
  if ($this.classList.contains("pause")) {
    video.play();
    playerControlsVisibility(false);
    playControl.src = "icons/vid-pause.svg";
    playControl.classList.add("pause");
  } else {
    video.pause();
    playerControlsVisibility(true);
    playControl.src = "icons/vid-play.svg";
  }
  $this.classList.toggle("pause");
});

// Stop video
// stopControl.addEventListener("click", () => {
//   video.pause();
//   video.currentTime = 0;
//   playControl.classList.add("paused");
// });

// Replay video
// replayControl.addEventListener("click", () => {
//   video.currentTime = 0;
//   playControl.classList.remove("paused");
//   video.play();
// });

// Rewind video
rewindControl.addEventListener("click", () => {
  video.currentTime = video.currentTime - 15;
});

// Forward video
forwardControl.addEventListener("click", () => {
  video.currentTime = video.currentTime + 15;
});

// Mute/unmute video
// volumeControl.addEventListener("click", (e) => {
//   volumeControl.parentNode.classList.toggle("muted");
//   if (volumeControl.parentNode.classList.contains("muted")) {
//     volumeSlider.value = 0;
//     video.volume = 0;
//   } else {
//     volumeSlider.value = 1;
//     video.volume = 1;
//   }
// });

// Volume slider
// volumeSlider.addEventListener("input", () => {
//   if (volumeSlider.value > 0) {
//     volumeControl.parentNode.classList.remove("muted");
//   } else {
//     volumeControl.parentNode.classList.add("muted");
//   }
//   video.volume = volumeSlider.value;
// });

// Progressbar
video.addEventListener("timeupdate", (e) => {
  let progress = (100 / video.duration) * video.currentTime;
  document
    .querySelector(".progress_fill")
    .setAttribute("style", `width:${progress}%`);
});

progressBar.addEventListener("click", (e) => {
  let goToTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = goToTime;
});

// Fullscreen mode
fullscreenControl.addEventListener("click", () => {
  let isFullscreen = videoWrapper.classList.contains("fullscreen");
  if (!isFullscreen) {
    turnFullscreen(true);
  } else {
    turnFullscreen(false);
  }
});

document.addEventListener("webkitfullscreenchange", function (e) {
  let isFullscreen = videoWrapper.classList.contains("fullscreen");
  videoWrapper.classList.toggle("fullscreen");
});

document.addEventListener("mozfullscreenchange", function (e) {
  let isFullscreen = videoWrapper.classList.contains("fullscreen");
  videoWrapper.classList.toggle("fullscreen");
});

document.addEventListener("fullscreenchange", function (e) {
  let isFullscreen = videoWrapper.classList.contains("fullscreen");
  videoWrapper.classList.toggle("fullscreen");
});

// functions
let playerControlsVisibility = (visibility) => {
  if (visibility) videoControls.classList.add("visible");
  else videoControls.classList.remove("visible");
};

// Show player controls
videoContainer.addEventListener("mouseover", () => {
  playerControlsVisibility(true);
});

// Hide player controls
videoContainer.addEventListener("mouseout", () => {
  playerControlsVisibility(false);
});

let turnFullscreen = (fullscreen) => {
  if (fullscreen) {
    if (videoWrapper.requestFullScreen) {
      videoWrapper.requestFullScreen();
    } else if (videoWrapper.webkitRequestFullScreen) {
      videoWrapper.webkitRequestFullScreen();
    } else if (videoWrapper.mozRequestFullScreen) {
      videoWrapper.mozRequestFullScreen();
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msCancelFullScreen) {
      document.msCancelFullScreen();
    }
  }
};
