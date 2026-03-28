
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
// Form Validation

const form = document.getElementById("myForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const error = document.getElementById("error");

        error.textContent = "";

        // Required fields
        if (name === "" || email === "" || password === "") {
            error.textContent = "All fields are required.";
            return;
        }

        // Email validation (regex)
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            error.textContent = "Invalid email format.";
            return;
        }

        // Password length
        if (password.length < 6) {
            error.textContent = "Password must be at least 6 characters.";
            return;
        }

        // Password match
        if (password !== confirmPassword) {
            error.textContent = "Passwords do not match.";
            return;
        }

        // Success
        alert("Form submitted successfully!");
        form.reset();
    });
}
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
