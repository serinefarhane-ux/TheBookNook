const nameElement = document.getElementById("name");

// 1. Load the saved name immediately when the page opens
const savedName = localStorage.getItem("fullName");
if (savedName) {
  nameElement.value = savedName;
}

// 2. Save the text automatically whenever they type
nameElement.addEventListener("input", () => {
  localStorage.setItem("fullName", nameElement.value);
});


// BIO CODE
const bioElement = document.getElementById("bio");

// 1. Load the saved bio immediately when the page opens
const savedBio = localStorage.getItem("bio");
if (savedBio) {
  bioElement.textContent = savedBio;
}

// 2. Save the text automatically whenever they type
bioElement.addEventListener("input", () => {
  localStorage.setItem("bio", bioElement.textContent);
});




// fav book CODE
const favBookElement = document.getElementById("favBook");

// 1. Load the saved favorite book immediately when the page opens
const savedFavBook = localStorage.getItem("favBook");
if (savedFavBook) {
  favBookElement.value = savedFavBook;
}

// 2. Save the text automatically whenever they type
favBookElement.addEventListener("input", () => {
  localStorage.setItem("favBook", favBookElement.value);
});



// JOIN DATE CODE
const joinDateElement = document.getElementById("joinDate");

let joinDate = localStorage.getItem("joinDate");

if (!joinDate) {
  // First time visiting — record today's date
  joinDate = new Date().toLocaleDateString();
  localStorage.setItem("joinDate", joinDate);
}

joinDateElement.textContent = `Member since ${joinDate}`;
// FAV GENRE CODE!!!

const genreType1 = document.querySelectorAll(".genre");
const genreType2 = document.querySelectorAll(".genre1");
const genreType3 = document.querySelectorAll(".genre2");
const savedGenresElement = document.querySelector("#savedGenres");

let savedGenres = JSON.parse(localStorage.getItem("savedGenres")) || [];

function updateSavedGenresDisplay() {
  savedGenresElement.textContent = `You have selected ${savedGenres.length} genres`;
}

function toggleGenre(genre, element) {
  const index = savedGenres.indexOf(genre);

  if (index === -1) {
    savedGenres.push(genre);
    element.classList.add("active");
  } else {
    savedGenres.splice(index, 1);
    element.classList.remove("active");
  }

  localStorage.setItem("savedGenres", JSON.stringify(savedGenres));
  updateSavedGenresDisplay();
}

genreType1.forEach(genre => {
  genre.addEventListener("click", () => {
    toggleGenre(genre.textContent, genre);
  });
});

genreType2.forEach(genre => {
  genre.addEventListener("click", () => {
    toggleGenre(genre.textContent, genre);
  });
});

genreType3.forEach(genre => {
  genre.addEventListener("click", () => {
    toggleGenre(genre.textContent, genre);
  });
});

// Load saved genres on page load
updateSavedGenresDisplay();

function restoreActiveGenres() {
  [...genreType1, ...genreType2, ...genreType3].forEach(genre => {
    if (savedGenres.includes(genre.textContent)) {
      genre.classList.add("active");
    }
  });
}

updateSavedGenresDisplay();
restoreActiveGenres();


// author code
// FAV AUTHOR CODE!!!

const authorType1 = document.querySelectorAll(".author");
const authorType2 = document.querySelectorAll(".author1");
const authorType3 = document.querySelectorAll(".author2");
const savedAuthorsElement = document.querySelector("#savedAuthors");

let savedAuthors = JSON.parse(localStorage.getItem("savedAuthors")) || [];

function updateSavedAuthorsDisplay() {
  savedAuthorsElement.textContent = `You have selected ${savedAuthors.length} authors`;
}

function toggleAuthor(author, element) {
  const index = savedAuthors.indexOf(author);

  if (index === -1) {
    savedAuthors.push(author);
    element.classList.add("active");
  } else {
    savedAuthors.splice(index, 1);
    element.classList.remove("active");
  }

  localStorage.setItem("savedAuthors", JSON.stringify(savedAuthors));
  updateSavedAuthorsDisplay();
}

function restoreActiveAuthors() {
  [...authorType1, ...authorType2, ...authorType3].forEach(author => {
    if (savedAuthors.includes(author.textContent)) {
      author.classList.add("active");
    }
  });
}

authorType1.forEach(author => {
  author.addEventListener("click", () => {
    toggleAuthor(author.textContent, author);
  });
});

authorType2.forEach(author => {
  author.addEventListener("click", () => {
    toggleAuthor(author.textContent, author);
  });
});

authorType3.forEach(author => {
  author.addEventListener("click", () => {
    toggleAuthor(author.textContent, author);
  });
});

updateSavedAuthorsDisplay();
restoreActiveAuthors();
