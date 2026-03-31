function toggleGoal(goalItem) {
    if (goalItem.classList.contains("completed")) {
        goalItem.classList.remove("completed");
        goalItem.innerHTML = goalItem.innerHTML.replace(" ✔", "");
    } else {
        goalItem.classList.add("completed");
        goalItem.innerHTML += " ✔";
    }
}
