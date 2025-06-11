let web_title = document.getElementById("web-title");
let track_name = document.getElementById("track-name");

let music_img = document.getElementById("music-img");
let music_duration = document.getElementById("music-duration");

//Buttons
let prev_btn = document.getElementById("prev-btn");
let prev_btn_img = document.getElementById("prev-btn-img");
let play_btn = document.getElementById("play-btn");
let play_btn_img = document.getElementById("play-btn-img");
let next_btn = document.getElementById("next-btn");
let next_btn_img = document.getElementById("next-btn-img");

const audio = new Audio('./audio/A Horny Money World.mp3');
let audioPlaying = false;

function LoadTrack() {
}


play_btn.addEventListener("click", function(event) {
    if (!audioPlaying) {
        audio.play();
        audioPlaying = true;
        play_btn_img.src = "./images/pause.png";
    }
    else {
        audio.pause();
        audioPlaying = false;
        play_btn_img.src = "./images/play.png";
    }
});
