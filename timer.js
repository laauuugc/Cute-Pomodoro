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
    timeLeft = 25 * 60; // Reset to 25 minutes
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

// Rest of your timer functionality remains the same


// Event listeners for buttons
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Initial display
updateTimerDisplay();

