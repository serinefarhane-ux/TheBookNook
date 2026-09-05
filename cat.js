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


// This is the TBR list code....

let tbr = JSON.parse(localStorage.getItem("tbr")) || [];
localStorage.setItem("tbr", JSON.stringify(tbr));



const addButton = document.querySelectorAll(".add-btn");

addButton.forEach(button => {
    button.addEventListener('click',()=> {
let card = button.closest(".fullRec");
let bookID = card.dataset.bookId;
tbr.push(bookID);
localStorage.setItem("tbr", JSON.stringify(tbr));
alert("Book Has been added to your TBR list");

    })
})



