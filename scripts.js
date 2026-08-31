





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


const dateInput = document.getElementById("date");
const bookInput = document.getElementById("song-input");
const notesInput = document.getElementById("mind-input");
const goalInput = document.getElementById("goal-input");

const saveButton = document.getElementById(".save-button");

const moodButtons = document.querySelectorAll(".mood-button");
const minutesButtons = document.querySelectorAll(".minutes-button");
let selectedMood = "";
let selectedMinutes="";

moodButtons.forEach(function(button){
button.addEventListener("click", function() {
    selectedMood = button.textContent;
});
});

minutesButtons.forEach(function(button){
    button.addEventListener("click", function(){
        selectedMinutes = button.textContent;
    });
});


saveButton.addEventListener("click", function(){
    const entry = {
        date: dateInput.value,
        book: bookInput.value,
        mood: selectedMood,
        minutes: selectedMinutes,
        notes: notesInput.value,
        goal: goalInput.value
    });

const entries = JSON.parse(localStorage.getItem("readingEntries")) || [];
    entries.push(entry);
    localStorage.setItem("readingEntries", JSON.stringify(entries));
    alert("Entry saved!");
});



