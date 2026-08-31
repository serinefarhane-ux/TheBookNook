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
