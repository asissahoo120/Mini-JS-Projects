let keyHistory = [];
window.addEventListener("keyup", (e) => {
    keyHistory.push(e.code);
    document.querySelector("b").innerHTML = `Pressed keys: ${keyHistory}`;

    let output = `
    <tr>
        <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    `;
    let outputRow = document.createElement("tr");
    outputRow.innerHTML = output;
    document.querySelector("table").appendChild(outputRow);
});
