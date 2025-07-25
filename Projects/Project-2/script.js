const calculateButton = document.querySelector(".calc");

calculateButton.addEventListener("click", () => {
    const weight = parseInt(document.querySelector("#weightInput").value);
    const height = parseInt(document.querySelector("#heightInput").value);
    const result = document.querySelector(".finalResult");
    let finalResult = weight / (height / 100) ** 2;

    if (!weight || weight <= 0 || !height || height <= 0) {
        result.innerHTML = "Please enter valid value!";
    } else {
        result.textContent = `Result is : ${finalResult.toFixed(1)}`;
    }
});
