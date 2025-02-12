let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");
let size = 16;
let noClickCount = 0; // Counter for No button clicks

function noClicked() {
    noClickCount++; // Increment the counter
    size += 30;
    yesButton.style.fontSize = size + "px";
    yesButton.style.padding = (size / 2) + "px";

    // Check if the No button has been clicked 6 times
    if (noClickCount === 6) {
        // Make the Yes button full screen
        yesButton.style.position = "fixed"; // Position it fixed
        yesButton.style.top = "0"; // Align to the top
        yesButton.style.left = "0"; // Align to the left
        yesButton.style.width = "100vw"; // Full width
        yesButton.style.height = "100vh"; // Full height
        yesButton.style.fontSize = "100px"; // Optional: Set a large font size
        yesButton.style.padding = "0"; // Remove padding
    }
}

function yesClicked() {
    window.location.href = "yes.html";
}