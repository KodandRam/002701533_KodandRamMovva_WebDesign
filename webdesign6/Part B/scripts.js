let displayHr = 0;
let displayMin = 0;
let displaySec = 0;
let hr = 0;
let sec = 0;
let min = 0;
let timeoutId = null;
let check = "stop";

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function timer() {
  sec++;
  if (sec / 60 == 1) {
    min++;
    sec = 0;
    if (min / 60 == 1) {
      hr++;
      min = 0;
    }
  }
  if (sec < 10) {
    displaySec = "0" + sec.toString();
  } else {
    displaySec = sec.toString();
  }
  if (min < 59) {
    displayMin = "0" + min.toString();
  } else {
    displayMin = min.toString();
  }
  if (hr < 59) {
    displayHr = "0" + hr.toString();
  } else {
    displayHr = hr.toString();
  }
  document.getElementById("timer").innerHTML =
    displayHr + ":" + displayMin + ":" + displaySec;
  await delay(1000);
}

function startTimer() {
  if (check === "stop") {
    timeoutId = setInterval(timer, 1000);
    check = "start";
  } else {
    clearInterval(timeoutId);
    document.getElementById("start").innerHTML = "Start";
    check = "stop";
  }
}

function resetTimer() {
  clearInterval(timeoutId);
  sec = 0, (min = 0), (hr = 0);
  document.getElementById("timer").innerHTML = "00:00:00";
  document.getElementById("start").innerHTML = "Start";
  check = "stop";
}

function stopTimer() {
  clearInterval(timeoutId);
  check = "stop";
}
