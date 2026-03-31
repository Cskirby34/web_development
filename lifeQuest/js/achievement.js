const colors = [
   "#ff3b3b", "#ffb703", "#4cc9f0",
   "#80ed99", "#c77dff", "#f72585"
];

function createConfetti() {
   const confetti = document.createElement("div");
   confetti.classList.add("confetti");

   const size = Math.random() * 8 + 6;
   confetti.style.width = size + "px";
   confetti.style.height = size * 1.4 + "px";
   confetti.style.left = Math.random() * window.innerWidth + "px";

   confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

   const fallDuration = Math.random() * 3 + 2;

   confetti.style.animation =
      `fallSpin ${fallDuration}s linear infinite`;

   document.body.appendChild(confetti);

   setTimeout(() => {
      confetti.remove();
   }, fallDuration * 1000);
}

setInterval(createConfetti, 100);
