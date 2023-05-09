// alert('It works!');

var video = document.getElementById("simon-game-video");
var playButton = document.getElementById("play-button");

playButton.addEventListener("click", function() {
    video.play();
    playButton.style.display = "none";
})

video.addEventListener("click", function() {
    if (!video.paused) {
        video.pause();
        playButton.style.display = "block";
    }
})