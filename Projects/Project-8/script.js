let genButton = document.querySelector("#pGenerate");

genButton.addEventListener("click", () => {
    let lengthInput = parseInt(document.querySelector("#pLength").value);
    let displayPassword = document.querySelector(".finalPassword");
    if (displayPassword) {
        displayPassword.remove();
    }
    if (lengthInput && lengthInput <= 20 && lengthInput >= 4) {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()-_=+[]{};:'\",.<>?/\\|`~";
        const passwordChar = [...upper, ...lower, ...numbers, ...symbols];
        let password = [
            upper[Math.floor(Math.random() * upper.length)],
            lower[Math.floor(Math.random() * lower.length)],
            numbers[Math.floor(Math.random() * numbers.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
        ];
        for (let i = password.length; i < lengthInput; i++) {
            let pIndex = Math.floor(Math.random() * passwordChar.length);
            password.push(passwordChar[pIndex]);
        }
        const generatedPassword = password.join("");
        let result = document.createElement("div");
        result.classList.add("finalPassword");
        result.innerHTML = `<h2>Your password is : ${generatedPassword}</h2>`;
        document.querySelector(".elements").appendChild(result);
    } else {
        alert("Please enter a valid length (4-20)");
    }
});
