// This is the save entry function for the reading log....

const dateInput = document.querySelector("#date");
const bookTitle = document.querySelector("#song-input");
const feelings = document.querySelector("#mind-input");
const readingTime = document.querySelector("#mind-input1");
const notes = document.querySelector("#mind-input2");
const goals = document.querySelector("#goal-input");

const saveBTN = document.querySelector(".save-button");

saveBTN.addEventListener("click", () =>{

    let data = {
        date: dateInput.value,
        bookTitle: bookTitle.value,
        feelings: feelings.value,
        readingTime: readingTime.value,
        notes: notes.value,
        goals: goals.value
    };

    localStorage.setItem("myData", JSON.stringify(data));
    alert("Entry Saved!")
})

let data = JSON.parse(localStorage.getItem("myData")) || {};

dateInput.value = data.date || "";
bookTitle.value = data.bookTitle || "";
feelings.value = data.feelings || "";
readingTime.value = data.readingTime || "";
notes.value = data.notes || "";
goals.value = data.goals || "";

