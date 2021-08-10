let BOOKS_DATA = [];

function setStorage() {
  localStorage.setItem('books_data', JSON.stringify(BOOKS_DATA));
}

function retrieveStorage() {
  BOOKS_DATA = JSON.parse(localStorage.getItem('books_data'));
}

if (!localStorage.getItem('books_data')) {
  setStorage();
} else {
  retrieveStorage();
}

let form = document.querySelector('form');
let bookList = document.getElementById('book-list');

function updateSelections() {
  form = document.querySelector('form');
  bookList = document.getElementById('book-list');
}

function addBook() {
  const bookTitle = document.getElementById('book-title');
  const bookAuthor = document.getElementById('book-author');

  const bookObj = {};

  bookObj.title = bookTitle.value;
  bookObj.author = bookAuthor.value;

  return bookObj;
}

function removeBook(element) {
  const textElements = element.parentElement.querySelectorAll('.book-card-text');

  BOOKS_DATA = BOOKS_DATA.filter((obj) => {
    if (textElements[0].innerText === obj.title && textElements[1].innerText === obj.author) {
      return false;
    }

    return true;
  });
}

function generateBookCard(bookObj) {
  const bookCard = document.createElement('li');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const removeBtn = document.createElement('button');

  bookCard.classList.add('book-card', 'mb-1');
  bookTitle.classList.add('book-card-text');
  bookAuthor.classList.add('book-card-text');
  removeBtn.classList.add('remove-book', 'mb-05');

  bookTitle.textContent = bookObj.title;
  bookAuthor.textContent = bookObj.author;
  removeBtn.textContent = 'Remove';

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(removeBtn);
  return bookCard;
}

function clearBooksSection() {
  bookList.innerHTML = '';
}

function displayBooksSection(bookArray) {
  for (let i = 0; i < bookArray.length; i += 1) {
    const bookCard = generateBookCard(bookArray[i]);
    bookList.appendChild(bookCard);
  }
}

displayBooksSection(BOOKS_DATA);
updateSelections();

document.addEventListener('click', (event) => {
  if (event.target && event.target.className === 'remove-book mb-05') {
    removeBook(event.target);
    setStorage();
    clearBooksSection();
    displayBooksSection(BOOKS_DATA);
    updateSelections();
  }
});

form.addEventListener('submit', (event) => {
  BOOKS_DATA.push(addBook());
  setStorage();
  clearBooksSection();
  displayBooksSection(BOOKS_DATA);
  updateSelections();
  event.preventDefault();
});
