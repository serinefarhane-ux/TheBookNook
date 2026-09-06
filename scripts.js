

let fav = JSON.parse(localStorage.getItem("fav")) || [];
const numBooks = document.querySelector("#mao1");
const circle = document.querySelectorAll(".h2");

function changeText() {

    // Changes the color of the heart
    this.style.color = "#A67580";

    // Toggles between the heart symbols
    if (this.textContent === "♥") {

        this.textContent = "♡";

    } else {

        this.textContent = "♥";
    }

    let card = this.closest(".fullRec");

    let bookID = card.dataset.bookId;

    if (!fav.includes(bookID)) {

        fav.push(bookID);

        localStorage.setItem("fav", JSON.stringify(fav));

        alert("Book has been added to your Favorites list");

    } else {

        alert("Book is already in your Favorites list");
    }
}

circle.forEach(c => c.addEventListener("click", changeText));

function updateBookCount() {
    if (fav.length === 1) {
        numBooks.textContent = `You have ${fav.length} book in your Favorites List`;
    } else {
        numBooks.textContent = `You have ${fav.length} books in your Favorites List`;
    }
}

updateBookCount();

// DISPLAY FILTER CODE
function displayFilter() {
    const filter=document.querySelector(".filterbuttons1");
    if (fav.length < 4) {
        filter.style.display = "none";
    } else {
        filter.style.display = "block";
    }
}
displayFilter();



const cards = document.querySelectorAll(".fullRec");

cards.forEach(card => {

    let bookID = card.dataset.bookId;
    if (fav.includes(bookID)) {
        card.classList.add("active");
    } else {
        card.style.display = "none";
    }

});


const resetBtn1 = document.querySelector("#reset1");

resetBtn1.addEventListener('click', () =>{
    if (confirm("Are you sure you want to clear your Favorites list. This action cannot be undone")) {
        localStorage.removeItem("fav");
        fav = [];
        updateBookCount();
        location.reload();  
    }
})
