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
    const audio = new Audio('alarm.mp3');
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

// Function to add a to-do item to the sticky note
function addTodoItem() {
    const todoInput = document.getElementById('todoItem');
    const todoText = todoInput.value.trim(); //correct variable name

    if (todoText !== '') {
        const todoList = document.getElementById('todoList');
        const listItem = document.createElement('li');
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            // Toggle strike-through text decoration on checkbox change
            listItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        });

        // Create span for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = todoText;

        // Create a bin icon
        const binIcon = document.createElement('span');
        binIcon.classList.add('bin-icon');
        binIcon.innerHTML = '&#128465;'; // Unicode for trash can icon
        binIcon.addEventListener('click', () => {
            // Remove the task when clicked
            listItem.remove();
        });

        listItem.appendChild(checkbox); // Append checkbox
        listItem.appendChild(taskSpan); // Append task text
        // Append bin icon to the list item
        listItem.appendChild(binIcon);

        listItem.addEventListener('mouseenter', () => {
            listItem.style.backgroundColor = '#cceeff'; // Change background color on hover
        });

        listItem.addEventListener('mouseleave', () => {
            listItem.style.backgroundColor = ''; // Reset background color on mouse leave
        });
        
        todoList.appendChild(listItem);
        todoInput.value = ''; // Clear input field after adding item
    }
}

// Variable to keep track of writing sounds state
let isWritingSoundsEnabled = false;
const writingSound = document.getElementById('writingSound');

// Function to toggle writing sounds
function toggleWritingSounds() {
    const writingSoundsToggle = document.getElementById('writingSoundsToggle');
    isWritingSoundsEnabled = writingSoundsToggle.checked;
    if (isWritingSoundsEnabled) {
        startWritingSounds();
    } else {
        stopWritingSounds();   
    }
}

// Function to start playing writing sounds
function startWritingSounds() {
    writingSound.play();
}

// Function to stop playing writing sounds
function stopWritingSounds() {
    writingSound.pause();
    writingSound.currentTime = 0; // Reset audio to the beginning
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show-menu');

    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('show-menu');
}

function adjustRainVolume(volume) {
    rainSound.volume = volume;
}

function adjustWritingVolume(volume) {
    writingSound.volume = volume;
}


// Add event listener to add todo button
document.getElementById('addTodoButton').addEventListener('click', addTodoItem);


// Add event listener to rain sounds toggle switch
document.getElementById('rainSoundsToggle').addEventListener('change', toggleRainSounds);
// Add event listener to writing sounds toggle switch
document.getElementById('writingSoundsToggle').addEventListener('change', toggleWritingSounds);


// Event listeners for buttons
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Initial display
updateTimerDisplay();

