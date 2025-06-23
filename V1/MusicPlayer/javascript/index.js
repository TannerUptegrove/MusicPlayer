let trackLoaderPanel = document.getElementById("track-loader-panel");
let appTitle = document.getElementById("app-title");
let instructionsText = document.getElementById("instructions-text");
let trackLoaderBtn = document.getElementById("track-loader-btn");

trackLoaderBtn.addEventListener("click", function(event) {
    trackLoaderPanel.style.gap = "200px";
    trackLoaderPanel.classList.add("track-loader-panel-animation");
    instructionsText.style.display = "none";
    trackLoaderBtn.innerHTML = "Load Again";
});