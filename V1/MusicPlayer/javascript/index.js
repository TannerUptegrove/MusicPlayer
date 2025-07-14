let trackLoaderPanel = document.getElementById("track-loader-panel");
let appTitle = document.getElementById("app-title");
let instructionsText = document.getElementById("instructions-text");
let trackLoaderBtn = document.getElementById("track-loader-btn");

let body = document.querySelector("body");
let backgroundDesign = document.querySelector(".background-design");

trackLoaderBtn.addEventListener("click", function(event) {
    trackLoaderPanel.style.gap = "200px";
    trackLoaderPanel.classList.add("track-loader-panel-animation");
    instructionsText.style.display = "none";
    trackLoaderBtn.innerHTML = "Load Again";

    body.classList.add("dim-background-animation");
    backgroundDesign.classList.add("dim-background-animation");
});

function LoadPlaylists() {
    
}