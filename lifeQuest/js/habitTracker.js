let count = 0;
let count2 = 0;
let count3 = 0;

function add() {
  count++;
  document.getElementById("counter").innerHTML = count;
}
function sub() {
  if (count > 0) count--;
  document.getElementById("counter").innerHTML = count;
}

function add2() {
  count2++;
  document.getElementById("counter2").innerHTML = count2;
}
function sub2() {
  if (count2 > 0) count2--;
  document.getElementById("counter2").innerHTML = count2;
}

function add3() {
  count3++;
  document.getElementById("counter3").innerHTML = count3;
}
function sub3() {
  if (count3 > 0) count3--;
  document.getElementById("counter3").innerHTML = count3;
}

let seconds = 0;
let intervalId = null;

function myStartFunction() {
  if (intervalId !== null) return;
  intervalId = setInterval(function() {
    seconds++;
    document.getElementById("timer").innerHTML = seconds;
  }, 1000);
}

function myStopFunction() {
  clearInterval(intervalId);
  intervalId = null;
}

function myResetFunction() {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  document.getElementById("timer").innerHTML = seconds;
}

function checkGoals() {
  const resultEl = document.getElementById("result");

  const mealsGoal  = count3 >= 3;
  const waterGoal  = count >= 4;
  const sleepGoal  = count2 >= 8;
  const exerciseGoal = seconds >= 1800;

  if (mealsGoal && waterGoal && sleepGoal && exerciseGoal) {
    resultEl.innerHTML = "✅ All goals met! Great job!";
    resultEl.style.color = "green";
  } else {
    let missing = [];

    if (!mealsGoal)    missing.push("3 meals");
    if (!waterGoal)    missing.push("4 glasses of water");
    if (!sleepGoal)    missing.push("8 hours of sleep");
    if (!exerciseGoal) missing.push("30 min of exercise");

    resultEl.innerHTML = "❌ Still need: " + missing.join(", ");
    resultEl.style.color = "red";
  }
}

// keep this ONLY if you remove nav.js version
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const nav = document.querySelector('nav');
  if (!nav.contains(e.target)) {
    document.getElementById('nav-links').classList.remove('open');
  }
});
