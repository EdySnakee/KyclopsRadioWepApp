    var audio = document.getElementById("radio");
    var isPlaying = false;

    function togglePlay() {
            if (isPlaying) {
        audio.pause();
    document.getElementById("play-button").classList.add("fa-play-circle");
    document.getElementById("play-button").classList.remove("fa-pause-circle");
            } else {
        audio.play();
    document.getElementById("play-button").classList.add("fa-pause-circle");
    document.getElementById("play-button").classList.remove("fa-play-circle");
            }
    isPlaying = !isPlaying;
        }

    document.getElementById("play-button").addEventListener("click", togglePlay);




var audio = document.getElementById("radio");
var isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        document.getElementById("play-button2").classList.add("fa-play-circle");
        document.getElementById("play-button2").classList.remove("fa-pause-circle");
    } else {
        audio.play();
        document.getElementById("play-button2").classList.add("fa-pause-circle");
        document.getElementById("play-button2").classList.remove("fa-play-circle");
    }
    isPlaying = !isPlaying;
}

document.getElementById("play-button2").addEventListener("click", togglePlay);

