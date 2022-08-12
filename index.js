// Modal Logic
const close = document.getElementById('close');
const modal = document.getElementById('modal');

close.onclick = function() {
    modal.style.display = "none";
}

// Audio Player Logic
const lockAudio = document.getElementById('lock-audio');
const unlockAudio = document.getElementById('unlock-audio');

const lockButton = document.getElementById('lock-audio-button');
const unlockButton = document.getElementById('unlock-audio-button');

const lockPlayIcon = document.getElementById('play-lock');
const lockPauseIcon = document.getElementById('pause-lock');
const unlockPlayIcon = document.getElementById('play-unlock');
const unlockPauseIcon = document.getElementById('pause-unlock');

let lockPlayState = "play"
let unlockPlayState = "play"

lockButton.addEventListener('click', () => {
    if(lockPlayState === 'play') {
        lockAudio.currentTime = 0;
        lockAudio.play();
        lockPlayIcon.style.display = "none";
        lockPauseIcon.style.display = "block";
        lockPlayState = 'pause';
    } else {
        lockAudio.pause();
        lockPlayIcon.style.display = "block";
        lockPauseIcon.style.display = "none";
        lockPlayState = 'play';
    }
});

unlockButton.addEventListener('click', () => {
    if(unlockPlayState === 'play') {
        unlockAudio.currentTime = 0;
        unlockAudio.play();
        unlockPlayIcon.style.display = "none";
        unlockPauseIcon.style.display = "block";
        unlockPlayState = 'pause';
    } else {
        unlockAudio.pause();
        unlockPlayIcon.style.display = "block";
        unlockPauseIcon.style.display = "none";
        unlockPlayState = 'play';
    }
});
    