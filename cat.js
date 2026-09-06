// this is the filter code

const buttons = document.querySelectorAll(".btn");
const items = document.querySelectorAll(".fullRec");


buttons.forEach(button => {
  button.addEventListener('click', () => {
    // ... everything else happens inside here ...

    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
    const filterValue = button.getAttribute("data-filter");
    items.forEach(item => {
        const itemGenre = item.getAttribute("data-genre");
        if(filterValue == "all"|| filterValue == itemGenre){
            item.classList.remove('hide'); // Show the item
      } else {
        item.classList.add('hide');
        };
    });
  });
});


// DOM for tbr page....

let tbr = JSON.parse(localStorage.getItem("tbr")) || [];
localStorage.setItem("tbr", JSON.stringify(tbr));

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
    tbr.push(bookID);
    localStorage.setItem("tbr", JSON.stringify(tbr));
}
localStorage.setItem("tbr", JSON.stringify(tbr));
if (!tbr.includes(bookID)) {
    alert("Book Has been added to your TBR list");
} else {
    alert("Book is already in your TBR list");
}   
    })
})
// end of add button code


// this is telling users how many books they have in their tbr lists
function updateBookCount() {
    if (tbr.length === 1) {
        bookNumber.textContent = `You have ${tbr.length} book in your TBR List`;
    } else {
        bookNumber.textContent = `You have ${tbr.length} books in your TBR List`;
    }
}

updateBookCount();

resetBtn.addEventListener('click', () =>{
    alert("Are you sure you want to clear your TBR list. This action cannot be undone");
    localStorage.removeItem("tbr");
})
