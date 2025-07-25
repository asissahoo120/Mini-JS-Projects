const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let changeBg;
let colorHistory = [];
start.addEventListener("click", () => {
    if (changeBg) {
        clearInterval(changeBg);
        changeBg = null;
    }
    changeBg = setInterval(() => {
        let randColor = `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")}`;
        document.body.style.backgroundColor = randColor;
        document.body.style.transition = "background-color 0.5s ease";
        colorHistory.push(randColor);
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(changeBg);
    changeBg = null;
    console.log(colorHistory);
});
