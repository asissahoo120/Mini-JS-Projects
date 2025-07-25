document.querySelector("#search").addEventListener("click", () => {
    let usernameInput = document.querySelector("#username").value.trim();
    if (!usernameInput) {
        alert("Please enter a GitHub username.");
        return;
    }

    let requestUrl = `https://api.github.com/users/${usernameInput}`;


    fetch(requestUrl)
        .then((response) => {
            if (!response.ok) {
                alert("User Not Found");
                throw new Error("User Not Found");
            }
            return response.json();
        })
        .then((user) => {
            let card = document.createElement("div");
            card.classList.add("card");

            let username = user.login;
            let pfpUrl = user.avatar_url;
            let ghbUrl = user.html_url;
            let bio = user.bio || "No bio available";
            let followersCount = user.followers;

            card.innerHTML = `
                <h2>GITHUB CARD</h2>
                <img src="${pfpUrl}" alt="${username}'s profile picture">
                <p class="details"><b>Username: </b>${username}</p>
                <p class="details"><b>URL: </b><a class="details" href="${ghbUrl}" target="_blank">${ghbUrl}</a></p>
                <p class="details"><b>Followers: </b>${followersCount}</p>
                <p class="details"><b>Bio:</b> ${bio}</p>`;

            document.querySelector(".cardContainer").appendChild(card);
        })
        .catch((error) => {
            console.error(error);
        });
});
