const canvas = document.getElementById("canvas");
const progressCircle = document.querySelector(".progress-circle");
const progressRing = document.querySelector(".progress-ring");
const playBtn = document.querySelector(".play-pause");
const nextBtn = document.querySelector(".icon-to-end");
const prevBtn = document.querySelector(".icon-to-start");
const musicPlayer = document.querySelector(".musicPlayer");
const musicLabel = document.querySelector(".music-label img");
const musicTitle = document.querySelector(".player>h2");
const musicArtist = document.querySelector(".player>h3");
const volumeInput = document.getElementById("volume");
const playListIcon = document.querySelector(".icon-th-list");
const playList = document.querySelector(".playlist");
const closeBtnPlayList = document.getElementById("closePlayList");
const trackList = document.querySelector(".playlist ul");
const rianBtn = document.querySelector(".rain-player span");
const rainVolume = document.querySelector(".rain-player input");
const playerVolumeIcon = document.getElementById("playerVolume");
const replayIcon = document.getElementById("replay");
const likeIcon = document.querySelector(".icon-heart");

let data;
let isReplayActive = false;

function changePlayicon() {
  playBtn.classList.toggle("icon-play-circle2");
  playBtn.classList.toggle("icon-pause-circled");
}

async function getData() {
  //getting json data:
  const response = await fetch("./data/data.json");
  data = await response.json();
}

const rect = canvas.getBoundingClientRect();

canvas.width = rect.width;
canvas.height = rect.height;

// //rain effect
const rainDropFx = new RaindropFX({
  canvas: canvas,
  background: "./image/8.jpg",
});

//change canvas size, when window resizes
window.onresize = () => {
  const rect = canvas.getBoundingClientRect();
  rainDropFx.resize(rect.width, rect.height);
};
rainDropFx.start();

const circleLength = 2 * Math.PI * 130;

musicPlayer.addEventListener("timeupdate", () => {
  const progress = musicPlayer.currentTime / musicPlayer.duration;
  progressCircle.style.strokeDashoffset = circleLength * (1 - progress);
});

const updateProgress = progress => {
  progressCircle.style.strokeDashoffset = circleLength * (1 - progress);
};

musicPlayer.addEventListener("timeupdate", () => {
  const progress = musicPlayer.currentTime / musicPlayer.duration;
  updateProgress(progress);
});

progressRing.addEventListener("click", e => {
  const rect = progressRing.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const x = e.clientX - rect.left - cx;
  const y = e.clientY - rect.top - cy;
  let angle = Math.atan2(y, x) + Math.PI / 2;
  if (angle < 0) angle += 2 * Math.PI;
  const progress = angle / (2 * Math.PI);
  musicPlayer.currentTime = progress * musicPlayer.duration;
  updateProgress(progress);
});

//play and pause :
playBtn.addEventListener("click", () => {
  musicPlayer.paused ? musicPlayer.play() : musicPlayer.pause();
  changePlayicon();
});

function playPause() {
  musicPlayer.paused ? musicPlayer.play() : musicPlayer.pause();
  changePlayicon();
}

//updating player volume with input range
volumeInput.addEventListener("input", () => {
  const updatedVolume = volumeInput.value / 100;
  musicPlayer.volume = updatedVolume;
});

playListIcon.addEventListener("click", () => {
  playList.classList.toggle("top-0");
});

closeBtnPlayList.addEventListener("click", () => {
  playList.classList.toggle("top-0");
});

//change track function:
function changeTrack(id) {
  //if playlist window was open, close it:
  if (playList.classList.contains("top-0")) {
    playList.classList.toggle("top-0");
  }
  if (!musicPlayer.paused) {
    //if music is playing , dont touch at play icon
    musicPlayer.paused ? musicPlayer.play() : musicPlayer.pause();
  } else {
    changePlayicon();
  }

  //choosing music with id:
  const filteredData = data.filter(obj => obj.id == id);
  console.log("filtered data : ", filteredData);
  const music = filteredData[0];
  musicTitle.innerHTML = music.title;
  musicArtist.innerHTML = music.artist;
  musicPlayer.src = music.fileAddress;
  musicLabel.src = music.labelAddress;
  //remember liked track
  if (filteredData[0].liked) {
    likeIcon.classList.add("liked");
  } else {
    likeIcon.classList.remove("liked");
  }
}

let activeTrackIndex = 1;

async function readData() {
  await getData();
  data.forEach(track => {
    //track is an Object
    let html = `<li>
                  <span class="title" data-id=${track.id}>${track.title}</span>
                  <span class="duration">${track.trackDuration}</span>
                </li>
    `;
    trackList.innerHTML += html;
  });
  const tracks = document.querySelectorAll(".playlist ul li");
  tracks.forEach(listItem => {
    listItem.addEventListener("click", () => {
      //getting track id:
      let trackId = parseInt(listItem.firstElementChild.dataset.id);
      changeTrack(trackId);
      activeTrackIndex = trackId;
      musicPlayer.play();
    });
  });

  //musicPlayer onended :
  musicPlayer.addEventListener("ended", () => {
    if (!isReplayActive) {
      if (activeTrackIndex < data.length) {
        activeTrackIndex++;
        changeTrack(activeTrackIndex);
        musicPlayer.play();
        changePlayicon();
      }
    } else {
      //just play again:
      musicPlayer.play();
    }
  });
}
readData();

musicPlayer.addEventListener("ended", () => {
  //when music ended, if it was last music, change play icon:
  if (activeTrackIndex == data.length) {
    //if replay is active, dont change playe icon because it replay:
    !isReplayActive ? changePlayicon() : null;
  }
});

//active replay:
replayIcon.addEventListener("click", () => {
  replayIcon.classList.toggle("opacity-1");
  //change replay state:
  isReplayActive = !isReplayActive;
});

nextBtn.addEventListener("click", () => {
  if (activeTrackIndex < data.length) {
    activeTrackIndex++;
    changeTrack(activeTrackIndex);
    musicPlayer.play();
  }
  console.log("active track index :", activeTrackIndex);
});

prevBtn.addEventListener("click", () => {
  if (activeTrackIndex !== 0 && activeTrackIndex !== 1) {
    activeTrackIndex--;
    changeTrack(activeTrackIndex);
    musicPlayer.play();
  }
  console.log("active track index :", activeTrackIndex);
});

////////////////////////////////////////////////   Rain   sound /////////////////

const rainSound = new Audio("audio/Classic Thunderstorm.mp3");
console.log(rainSound);

//rain button:
rianBtn.addEventListener("click", playRain);
function playRain() {
  rainSound.paused ? rainSound.play() : rainSound.pause();
  if (rainSound.paused) {
    rianBtn.innerHTML = " play_circle ";
  }
  if (!rainSound.paused) {
    rianBtn.innerHTML = " pause_circle ";
  }
}

rainSound.addEventListener("timeupdate", e => {
  console.log(e.timeStamp);
});

rainSound.addEventListener("ended", () => {
  rianBtn.innerHTML = " play_circle ";
  console.log("rainSound ended");
});

rainVolume.addEventListener("input", () => {
  const updatedVolume = rainVolume.value / 100;
  rainSound.volume = updatedVolume;
});

playerVolumeIcon.addEventListener("click", () => {
  playerVolumeIcon.classList.toggle("icon-volume-off-1");
  playerVolumeIcon.classList.toggle("icon-volume-up");
  volumeInput.hidden = !volumeInput.hidden;
  musicPlayer.muted = !musicPlayer.muted;
});

//onclick event for like :
likeIcon.addEventListener("click", () => {
  likeTrack(activeTrackIndex); //change track likestate on the data
  //change on UI:
  checkLike(activeTrackIndex);
});

function likeTrack(id) {
  //changing the like state in data:
  let track = data.filter(track => track.id === id);
  track = track[0];
  console.log("liked track :", track);
  track.liked = !track.liked;
}

function checkLike(trackId) {
  let targetTrack = data[trackId - 1];
  if (targetTrack.liked) {
    likeIcon.classList.toggle("liked");
  } else {
    likeIcon.classList.toggle("liked");
  }
  console.log(data);
}
