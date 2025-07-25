let timeContainer = document.querySelector(".time");

setInterval(() => {
    let date = new Date();
    timeContainer.textContent = date.toLocaleTimeString();
}, 1000);
