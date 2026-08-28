





const circle = document.getElementById("h2");
function changeText() {
    // this changes the color of the circle element to a specific hex color code when clicked
    circle.style.color = "#A67580";

    // this is basically a toggle function that changes the text content of the circle element between "♥" and "♡" when clicked
    if (circle.textContent === "♥") {
        circle.textContent = "♡"; 
    } else {
        circle.textContent = "♥"; 
    }
}

  

circle.addEventListener("click", changeText);

