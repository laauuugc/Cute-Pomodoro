let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000); // Update every second
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    // Set the time based on selected options
    const studyTimeSelect = document.getElementById('studyTime');
    const breakTimeSelect = document.getElementById('breakTime');
    timeLeft = parseInt(studyTimeSelect.value) * 60;
    updateTimerDisplay();
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
    } else {
        clearInterval(timer);
        isRunning = false;
        playAlarm(); // Play alarm sound
        // You can also add additional actions here, such as showing a notification
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function playAlarm() {
    // Create an audio element and play the alarm sound
    const audio = new Audio('alarm.mp3'); // Replace 'alarm.mp3' with your alarm sound file
    audio.play();
}

// Function to change background image
function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
}

// Variable to keep track of rain sounds state
let isRainSoundsEnabled = false;
const rainSound = document.getElementById('rainSound');
// Function to toggle rain sounds
function toggleRainSounds() {
    const rainSoundsToggle = document.getElementById('rainSoundsToggle');
    isRainSoundsEnabled = rainSoundsToggle.checked;
    if (isRainSoundsEnabled) {
        startRainSounds();
    } else {
        stopRainSounds();   
    }
}
// Function to start playing rain sounds
function startRainSounds() {
    rainSound.play();
}

// Function to stop playing rain sounds
function stopRainSounds() {
    rainSound.pause();
    rainSound.currentTime = 0; // Reset audio to the beginning
}

// Add event listener to rain sounds toggle switch
document.getElementById('rainSoundsToggle').addEventListener('change', toggleRainSounds);


// Event listeners for buttons
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Initial display
updateTimerDisplay();

