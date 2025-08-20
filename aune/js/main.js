var audio = new Audio();
audio.addEventListener("ended", () => {
    document.getElementById("playingSound").classList.remove("is-playing");
});

function playSound(filePath) {
    document.getElementById("playingSound").classList.add("is-playing");
    audio.src = filePath;
    audio.play();
}