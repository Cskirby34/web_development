const pomodoroCountElem = document.getElementById("pomodoro-count");
let pomodoroCount = 0;

function toggleGoal(goalItem) {
    if (goalItem.classList.contains("completed")) {
        // Remove completed class and checkmark
        goalItem.classList.remove("completed");
        goalItem.innerHTML = goalItem.innerHTML.replace(" ✔", "");
        // Decrement Pomodoro count
        pomodoroCount--;
    } else {
        // Add completed class and checkmark
        goalItem.classList.add("completed");
        goalItem.innerHTML += " ✔";
        // Increment Pomodoro count
        pomodoroCount++;
    }
    // Update the counter display
    if (pomodoroCountElem) {
        pomodoroCountElem.textContent = pomodoroCount;
    }
}
