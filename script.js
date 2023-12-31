// Gets all the buttons for "Pokedoro, Short Break, and Long Break"
// This helps us with the hover affects and the active highligher
const getButtons = document.querySelectorAll('.btn');

// Add click event listeners to each button
getButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        getButtons.forEach(btn => {
            btn.classList.remove('btn-active');
        });

        // Add 'active' class to the clicked button
        button.classList.add('btn-active');
    });
});


// Variable Declarations for the Program:
let pomodoroButton = document.getElementById("pomodoro");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startButton = document.getElementById("btn-start");
let resetButton = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let active = "pomodoro";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

//values less than 10, 5 -> 05
const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};

resetButton.addEventListener(
  "click",
  (resetTime = () => {
    pauseTimer();
    switch (active) {
      case "long":
        minCount = 14;
        break;
      case "short":
        minCount = 4;
        break;
      default:
        minCount = 24;
        break;
    }
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  })
);

const removePomdoro = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-pomodoro");
  });
};

pomodoroButton.addEventListener("click", () => {
  active = "pomodoro"; // Set the active mode
  // removePomodoro();
  pomodoroButton.classList.add("btn-pomodoro");
  pauseTimer();
  minCount = 24;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});

shortBreakButton.addEventListener("click", () => {
  active = "short"; // Set the active mode
  // removePomodoro();
  shortBreakButton.classList.add("btn-pomodoro");
  pauseTimer();
  minCount = 4;
  count = 59;
  time.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener("click", () => {
  active = "long"; // Set the active mode
  // removePomodoro();
  longBreakButton.classList.add("btn-pomodoro");
  pauseTimer();
  minCount = 14;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});

pause.addEventListener(
  "click",
  (pauseTimer = () => {
    paused = true;
    clearInterval(set);
    startButton.classList.remove("hide");
    pause.classList.remove("show");
    resetButton.classList.remove("show");
  })
);

startButton.addEventListener("click", () => {
  resetButton.classList.add("show");
  pause.classList.add("show");
  startButton.classList.add("hide");
  startButton.classList.remove("show");
  if (paused) {
    paused = false;
    time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
    set = setInterval(() => {
      count--;
      time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(set);
        }
      }
    }, 1000);
  }
});