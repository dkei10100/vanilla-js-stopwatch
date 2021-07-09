"use strict";

const timer = document.querySelector(".timer");
const stop = document.querySelector(".stop-btn");
const start = document.querySelector(".start-btn");
const reset = document.querySelector(".reset-btn");

let sec = 0;
let mins = 0;
let stopTime = true;

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
console.log(stop);

function startTimer() {
  if (stopTime === true) {
    stopTime = false;
    startBtn();
  }
}

function stopTimer() {
  if (stopTime === false) stopTime = true;
}

function resetTimer() {
  timer.innerHTML = "00:00";
  stopTime = true;
  sec = 0;
  mins = 0;
}

function startBtn() {
  if (stopTime === false) {
    sec++;

    if (sec < 10) sec = "0" + sec;

    if (sec == 60) {
      // Add +1 to mins
      mins++;

      // Reset seconds to 00
      sec = 0 + "0";
    }

    setTimeout(() => {
      startBtn();
    }, 1000);
    timer.innerHTML = `0${mins}:${sec}`;
  }
}
