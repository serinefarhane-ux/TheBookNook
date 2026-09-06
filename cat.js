

// DOM for tbr page....

let tbr = JSON.parse(localStorage.getItem("tbr")) || [];


const bookNumber = document.querySelector("#mao");
const resetBtn = document.querySelector("#reset");



// add button code
const addButton = document.querySelectorAll(".add-btn");
// END OF DOM CODE

addButton.forEach(button => {
    button.addEventListener('click',()=> {
let card = button.closest(".fullRec");
let bookID = card.dataset.bookId;
if (!tbr.includes(bookID)) {
    alert("Book has been added to your TBR list");
} else {
    alert("Book is already in your TBR list");
}
if (!tbr.includes(bookID)) {
    tbr.push(bookID);
    localStorage.setItem("tbr", JSON.stringify(tbr));
}

   
    })
})
// end of add button code



// UPDATING BOOK NUMBER COUNT CODE
function updateBookCount1() {
    if (tbr.length === 1) {
        bookNumber.textContent = `You have ${tbr.length} book in your TBR List`;
    } else {
        bookNumber.textContent = `You have ${tbr.length} books in your TBR List`;
    }
}

updateBookCount1();


// RESET BUTON CODE

const cards = document.querySelectorAll(".fullRec");
resetBtn.addEventListener('click', () =>{
    if (confirm("Are you sure you want to clear your TBR list. This action cannot be undone")) {
        localStorage.removeItem("tbr");
        tbr = [];
        updateBookCount1();
       location.reload();
    }
})

// DISPLAY FILTER CODE
function displayFilter() {
    const filter=document.querySelector(".filterbuttons1");
    if (tbr.length < 4) {
        filter.style.display = "none";
    } else {
        filter.style.display = "block";
    }
}
displayFilter();




cards.forEach(card => {

    let bookID = card.dataset.bookId;
    if (tbr.includes(bookID)) {
        card.classList.add("active");
    } else {
        card.style.display = "none";
    }

});
function updateBookCount() {
    if (tbr.length === 1) {
        bookNumber.textContent = `You have ${tbr.length} book in your TBR List`;
    } else {
        bookNumber.textContent = `You have ${tbr.length} books in your TBR List`;
    }
}

updateBookCount();
