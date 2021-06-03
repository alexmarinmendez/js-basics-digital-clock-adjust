let hours = 0;
let minutes = 0;

const hoursValue = document.querySelector("#hours-value");
const minutesValue = document.querySelector("#minutes-value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("btn-hour")) {
      if (hours < 23) {
        hours++;
      } else {
        hours = 0;
      }
      hoursValue.textContent = hours < 10 ? "0" + hours : hours;
    } else if (styles.contains("btn-min-plus")) {
        if (minutes < 55) {
            minutes += 5;
        } else {
            minutes = 0;
        }
    } else {
        if (minutes > 0) {
            minutes -= 5;
        }
    }
    minutesValue.textContent = minutes < 10 ? ":0" + minutes : ":" + minutes;
  });
});
