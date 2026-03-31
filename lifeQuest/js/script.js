
//DOM Manipulation
// This changes title text
const title = document.getElementById("title");
if (title) {
    title.textContent = "Welcome to My Interactive Website!";
}

// Add new list item dynamically
const addItemBtn = document.getElementById("addItemBtn");
if (addItemBtn) {
    addItemBtn.addEventListener("click", () => {
        const ul = document.getElementById("list");
        const newItem = document.createElement("li");
        newItem.textContent = "New Item " + (ul.children.length + 1);
        ul.appendChild(newItem);
    });
}

// Remove last list item
const removeItemBtn = document.getElementById("removeItemBtn");
if (removeItemBtn) {
    removeItemBtn.addEventListener("click", () => {
        const ul = document.getElementById("list");
        if (ul.lastElementChild) {
            ul.removeChild(ul.lastElementChild);
        }
    });
}
// Event Handeling
// Button click event
const clickBtn = document.getElementById("clickBtn");
if (clickBtn) {
    clickBtn.addEventListener("click", (event) => {
        alert("Button clicked!");
        console.log("Clicked element:", event.target);
    });
}
// Hover effect
if (clickBtn) {
    clickBtn.addEventListener("mouseover", () => {
        clickBtn.style.backgroundColor = "red";
    });

    clickBtn.addEventListener("mouseout", () => {
        clickBtn.style.backgroundColor = "";
    });
}

// Keyboard event
document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});

// Interactive Features
// Welcome message after 2 seconds
setTimeout(() => {
    console.log("Welcome to the site!");
}, 2000);

// Repeating message every 5 seconds
setInterval(() => {
    console.log("Site is active...");
}, 5000);

// Simple animation (moving box)
const box = document.getElementById("box");

if (box) {
    let position = 0;

    setInterval(() => {
        position += 5;
        box.style.position = "relative";
        box.style.left = position + "px";

        // reset position
        if (position > 300) {
            position = 0;
        }
    }, 100);
}
// Extra interactivity
// Change background color button
const colorBtn = document.getElementById("colorBtn");

if (colorBtn) {
    colorBtn.addEventListener("click", () => {
        document.body.style.backgroundColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
}

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
