window.onload = function() {
    alert("Welcome to our website!");
};
function showDate() {
    let today = new Date();
    let date = today.toDateString();
    document.getElementById("date").innerHTML = date;
}
function toggleMenu() {
    let nav = document.getElementById("navMenu");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } 
    else {
        nav.style.display = "block";
    }
}
