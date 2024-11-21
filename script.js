function showMessage(answer) {
    const response = document.getElementById("response");
    if (answer === "yes") {
        response.textContent = "Yay! You made my day! 💕";
    } else {
        response.textContent = "😢 Awww... maybe someday?";
    }
    response.style.display = "block";
}

function moveButton() {
    const noButton = document.querySelector(".no-btn");
    const container = document.querySelector(".button-container");

    const randomX = Math.random() * (container.offsetWidth - noButton.offsetWidth);
    const randomY = Math.random() * (container.offsetHeight - noButton.offsetHeight);

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
