
// GET HTML ELEMENTS

const coverPage = document.getElementById("coverPage");
const letterPage = document.getElementById("letterPage");
const memoriesPage = document.getElementById("memoriesPage");

const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

const volumeSlider = document.getElementById("musicVolume");
const bgMusicForVolume = document.getElementById("backgroundMusic");


// PAGE NAVIGATION

function showPage(page) {

    // Hide all pages

    coverPage.classList.remove("active");
    letterPage.classList.remove("active");
    memoriesPage.classList.remove("active");

    // Stop videos from playing when leaving a page

    document.querySelectorAll("video").forEach(video => {
        video.pause();
    });

    // Show selected page

    page.classList.add("active");

    // Start from the top

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Set default volume to 30%
bgMusicForVolume.volume = 0.3;

// Adjust volume
volumeSlider.addEventListener("input", function () {
    bgMusicForVolume.volume = this.value / 100;
});

// OPEN ENVELOPE

openButton.addEventListener("click", () => {

    // Start envelope animation

    envelope.classList.add("open");

    // Try to start background music

    backgroundMusic.play()
        .then(() => {
            musicButton.textContent = "♫ Music: ON";
        })
        .catch(() => {
            musicButton.textContent = "♫ Music: OFF";
        });

    // Open letter after animation

    setTimeout(() => {
        showPage(letterPage);
    }, 1100);

});


// GO TO VIDEO PAGE

nextButton.addEventListener("click", () => {

    showPage(memoriesPage);

});


// BACK TO LETTER

backButton.addEventListener("click", () => {

    showPage(letterPage);

});


// BACKGROUND MUSIC CONTROL

musicButton.addEventListener("click", () => {

    if (backgroundMusic.paused) {

        backgroundMusic.play()
            .then(() => {
                musicButton.textContent = "♫ Music: ON";
            })
            .catch(() => {
                musicButton.textContent = "♫ Music: OFF";
            });

    } else {

        backgroundMusic.pause();

        musicButton.textContent = "♫ Music: OFF";

    }

});
