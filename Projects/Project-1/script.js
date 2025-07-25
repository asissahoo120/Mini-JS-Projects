const boxes = document.querySelectorAll(".box");

boxes.forEach((e) => {
    let randomColor = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
    e.style.backgroundColor = randomColor;
    e.textContent += randomColor;
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        document.body.style.backgroundColor =
            window.getComputedStyle(box).backgroundColor;
    });
});
