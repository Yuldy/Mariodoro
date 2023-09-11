// Gets all the buttons for "Pokedoro, Short Break, and Long Break"
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


// Buttons for the rest
let pokedoroButton = document.getElementById("pokedoro");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById('longbreak');
let startButton = document.getElementById("btn-start");
let resetButton = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");

let time = document.getElementById("time");
let set;
let count = 59;
let paused = true;
let minCount = 24;

time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
}

resetButton.addEventListener(
    "click",
    (resetTime = () => {
        pauseTimer();
        count = 59;
        mincount = 24;
        time.textContent = `${minCount + 1}:00`
    })
);

const removePokedoro = () => {
    buttons.forEach((btn) => {
        btn.classList.remove("btn-pokedoro")
    });
}

pokedoroButton.addEventListener("click", () => {
    removePokedoro();
    pokedoroButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});

shortBreak

